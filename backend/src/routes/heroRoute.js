const express = require('express');
const router = express.Router();

router.get('/api/hero', (req, res) => {
    res.json({
        nama: 'Fawwaz Arya',
        peran: 'Frontend Developer',
        deskripsi: 'I am a passionate frontend developer with experience in building responsive and user-friendly web applications.',
    });
});

module.exports = router;