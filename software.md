---
layout: default
title: software
---
## peak tracker
Spectral audio effect plugin (available as VST3, CLAP, LV2).
Transpose and detune sounds by splitting them into frequency components and resynthesizing.
Inspired by Miller Puckette's peak tracking mode in the Pd/Max ~sigmund object.

#### Features:
- Transpose: repitch the incoming audio signal up or down by up to 2 octaves.
- Detune: applies a random offset to each frequency partial in the reassembled sound.
- Synth mode: connect a MIDI input and play notes to transpose the signal. Transposition is relative to middle C (Note 60). Use chords to create harmonies.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JVvRggFd4_g?si=tDxfF1qymieV33yB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[source code](https://github.com/ctsexton/peak-tracker)

[Download VST3 for Mac]({{ "/assets/software/PeakTrackerInstallerUniversalBinary.pkg" | relative_url }})

<hr/>

## sample mangler
Written in SuperCollider, record sounds and manipulate the playhead to chop them up in real time. Inspired by Rodrigo Constanzo's Max patch "The Chocolate Grinder".

[source code](https://github.com/ctsexton/sampler)
