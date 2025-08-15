---
title: Jitter
slug: Glossary/Jitter
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

**Jitter** ist der Begriff, der im Computernetzwerk verwendet wird, um die [Paketverzögerungsvariation](https://en.wikipedia.org/wiki/Packet_delay_variation) zu beschreiben — die Varianz in der Rate, mit der Pakete an einem Ziel ankommen (der Durchschnitt der quadrierten Abweichung von der durchschnittlichen Paketankunftsrate).

"Hoher Jitter" zeigt an, dass Pakete mit erheblich variierenden Raten ankommen, was möglicherweise auf Netzwerküberlastung, Paketverlust und die Weiterleitung von Paketen in einem Strom durch unterschiedliche Pfade zurückzuführen ist.
Hoher Jitter kann die Leistung von Echtzeitanwendungen im Web, einschließlich Sprach-/Videostreaming und Online-Gaming, erheblich beeinträchtigen.

## Jitter-Puffer

Netzwerkprotokolle und Anwendungen wie WebRTC verwenden einen "Jitter-Puffer", um die Auswirkungen der Paketverzögerungsvariation zu mildern.
Jitter-Puffer speichern eingehende Pakete vorübergehend und geben sie dann in einer gleichmäßigen, synchronisierten Rate frei.
Sie können auch Vorwärtsfehlerkorrektur verwenden, um korrupte Pakete zu reparieren, fehlende Pakete erneut anzufordern, [Audiosamples einfügen, um fehlende Pakete zu verbergen](https://en.wikipedia.org/wiki/Packet_loss_concealment), die Wiedergabegeschwindigkeit von Samples zu verlangsamen oder zu beschleunigen und so weiter.
Dieser Prozess glättet die Ankunftszeiten von Paketen und sorgt für eine gleichmäßigere Wiedergabe von Echtzeit-Audio und -Video.

## Siehe auch

- [Wie WebRTC's NetEQ Jitter-Puffer für reibungsloses Audio sorgt](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) (webrtchacks.com, Juni 2025)
