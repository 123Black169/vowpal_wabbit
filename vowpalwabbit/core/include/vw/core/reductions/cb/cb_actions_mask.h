// Copyright (c) by respective owners including Yahoo!, Microsoft, and
// individual contributors. All rights reserved. Released under a BSD (revised)
// license as described in the file LICENSE.

#pragma once

#include "vw/core/learner_fwd.h"
#include "vw/core/vw_fwd.h"

namespace VW
{
namespace reductions
{
class cb_actions_mask
{
public:
  // this reduction is used to get the actions mask from VW::actions_mask::reduction_features and apply it to the
  // outcoming predictions
  void learn(VW::LEARNER::multi_learner& base, multi_ex& examples);
  void predict(VW::LEARNER::multi_learner& base, multi_ex& examples);

private:
  template <bool is_learn>
  void learn_or_predict(VW::LEARNER::multi_learner& base, multi_ex& examples);
};

VW::LEARNER::base_learner* cb_actions_mask_setup(VW::setup_base_i&);
}  // namespace reductions
}  // namespace VW