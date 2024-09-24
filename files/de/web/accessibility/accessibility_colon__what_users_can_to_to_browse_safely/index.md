---
title: "Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen"
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Dieser Artikel diskutiert, wie man Webinhalte für Personen mit vestibulären Störungen und diejenigen, die sie unterstützen, durch Nutzung von Personalisierungs- und Barrierefreiheitseinstellungen in Betriebssystemen zugänglich machen kann. Die Nutzung dieser Einstellungen kann helfen, eine Exposition gegenüber Inhalten zu vermeiden, die Anfälle und/oder andere physische Reaktionen auslösen könnten.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel, "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Flackern kann durch das Display, den Computer, der das Bild rendert, oder durch die gerenderten Inhalte verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Sie können durch das Design und die Geschwindigkeit des Displays und des Computers beeinflusst werden.

### Hardware und Betriebssysteme auf vielen Computern bieten Kontrolle, die Entwicklern nicht ermöglicht wird

Der Nutzer kann viel tun, um sich selbst zu schützen, indem er sein Betriebssystem, dessen Personalisierungs- und Barrierefreiheitseinstellungen kennenlernt. Diejenigen im öffentlichen Sektor, die Menschen mit speziellen Empfindlichkeiten unterstützen müssen, sollten in Betracht ziehen, mindestens einen Arbeitsplatz zur Seite zu stellen und sich mit dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine kostensparende Maßnahme sein. Ein Arbeitsplatz kann so eingerichtet werden, dass sowohl eine Person mit eingeschränktem Sehvermögen (benötigt hohen Kontrast) als auch eine Person mit lichtempfindlichen Anfälligkeiten unterstützt wird, indem Personalisierungs- und Barrierefreiheitseinstellungen angepasst werden.

### Nutzen Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen

Moderne Browser unterstützen die CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion). Browser können erkennen, ob ein Nutzer eine reduzierte Bewegungserfahrung wünscht. Der Nutzer würde dies über eine Barrierefreiheitsschnittstelle aufrufen, wie unten gezeigt.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Übergangsevents werden unterstützt. Beispiele sind:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Automatische Wiedergabe nicht aktivieren (funktioniert nicht für GIFs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den OS-Barrierefreiheitseinstellungen für Apple (Bildquelle: developers.google.com aus Thomas Steiners Artikel "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies wird bei animierten GIFs nicht funktionieren; die Quelle der Animation ist in das GIF integriert und wird von diesen Einstellungen nicht beeinflusst.![Screenshot, der zeigt, wie man die Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Aktivieren Sie Inhaltsblocker; Entfernt Werbung, reduziert und/oder entfernt Ablenkungen
- Aktiviert Text-zu-Sprache
- In bestimmten Browsern können Schriftarten nach Wahl aktiviert werden
- Seitenzoom aktivieren

#### Animierte GIFs im Browser ausschalten

Browser bieten ihren Nutzern viel Macht; es ist nur eine Frage, zu wissen, wohin man gehen muss. Mit Firefox als Beispiel erklärt es, dass durch das Ändern des Wertes der **image.animation_mode** von "normal" zu "none" alle animierten Bilder blockiert werden. Um es rückgängig zu machen, müssen Sie den Wert wieder auf "normal" ändern.

![Screenshot, der image.animation.mode in Firefox anzeigt](image_animation_mode.png)

#### Verwenden Sie Browser-Erweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist GIF Blocker im Web Store als Erweiterung verfügbar.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es ermöglicht, GIFs wie mit einem Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browser-Erweiterung, die es ermöglicht, in Graustufen und Dyslexie-Schrift zu lesen, unter anderem.

![Screenshot, der die Modi von Beeline Reader zeigt, die ein Benutzer im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheitsfunktionen des Betriebssystems

Die meisten Betriebssysteme, wie Windows 10, haben Zugänglichkeitsoptionen, die überraschend leistungsfähig sind. Normalerweise sind sie recht leicht zu finden, indem man das Wort "Barrierefreiheit" in die Suchfunktion des Betriebssystems eingibt (oder sagt).

#### Animierte GIFs im Betriebssystem ausschalten

Im Betriebssystem Windows 10 hat der Nutzer die Möglichkeit, Animationen auszuschalten. Dies wird bei animierten GIFs nicht funktionieren; die Quelle der Animation ist in das GIF integriert und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die eine traumatische Hirnverletzung (TBI) erlitten haben, können extrem empfindlich auf Farben reagieren; dies kann eine so große "Investition an kognitiver Energie" erfordern, dass keine Energie für andere tägliche Aufgaben mehr übrig bleibt. Die Graustufenpräsentation der Inhalte reduziert die kognitive Belastung. Sie kann auch Nutzern mit anderen Behinderungen helfen. Eine interessante Diskussion von Nutzern über die Vorteile der Verwendung von Graustufen findet sich im Diskussionsfaden, "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)". Besonders interessant ist ein Nutzer, der an Photosensitiver Epilepsie leidet und es nutzt, wenn er sich "seizure-y" fühlt.

Die meisten Betriebssysteme bieten eine Möglichkeit, dass der Nutzer eine Anpassung am Arbeitsplatz vornehmen kann. Im Screenshot unten sehen Sie ein Beispiel für die Barrierefreiheitseinstellungen von Windows 10, die die Auswahl von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn der Farbfilter-Button auf "on" gestellt wird

![Zeigt Windows 10 Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernpfad Barrierefreiheit](/de/docs/Learn/Accessibility)
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Simulation der Farbsehstörung](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
