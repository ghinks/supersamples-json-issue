'use strict';

const action = (req, res) => res.status(200).json({
    param1: 1,
    param2: 2,
    param3: '3',
});


module.exports = {
    action,
};
