---
title: "Accessibility: Was Benutzer tun können, um sicherer zu surfen"
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Dieser Artikel diskutiert, wie Webinhalte für Personen mit vestibulären Störungen und deren Unterstützer zugänglich gemacht werden können, indem Personalisierungs- und Barrierefreiheits-Einstellungen genutzt werden, die in den Betriebssystemen integriert sind. Die Nutzung von Personalisierungseinstellungen kann dazu beitragen, eine Exposition gegenüber Inhalten zu verhindern, die zu Anfällen und/oder anderen körperlichen Reaktionen führen.

## Personalisierungs- und Barrierefreiheits-Einstellungen

Aus dem Artikel, "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Blinken kann durch das Display, den Computer, der das Bild rendert, oder durch den gerenderten Inhalt verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Diese können durch das Design und die Geschwindigkeit des Displays und des Computers adressiert werden.

### Viele Computer bieten Hardware- und Betriebssystemsteuerung, die Entwicklern nicht zur Verfügung steht

Der Benutzer kann viel tun, um sich zu schützen, indem er sein Betriebssystem, dessen Personalisierungs- und Barrierefreiheits-Einstellungen erlernt. Personen im öffentlichen Sektor, die auf besondere Empfindlichkeiten Rücksicht nehmen müssen, sollten in Betracht ziehen, mindestens einen Arbeitsplatz einzurichten und sich mit dessen Personalisierungs- und Barrierefreiheits-Einstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheits-Einstellungen kann sich tatsächlich als kostensparend erweisen. Ein Arbeitsplatz kann sowohl für eine Person mit Sehschwäche (benötigt hohen Kontrast) als auch für eine Person mit lichtempfindlichen Anfälligkeiten eingerichtet werden, indem die Personalisierungs- und Barrierefreiheits-Einstellungen angepasst werden.

### Verwenden Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheits-Einstellungen

Moderne Browser unterstützen das CSS Medien-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer ein Erlebnis mit reduzierter Bewegung angefordert hat. Der Benutzer würde darauf über eine Barrierefreiheits-Oberfläche zugreifen, wie unten gezeigt.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Übergangsevents werden unterstützt. Beispiele beinhalten:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Automatische Wiedergabe nicht aktivieren (funktioniert nicht für GIFs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den Barrierefreiheits-Einstellungen des OS für Apple (Bildquelle: developers.google.com aus dem Artikel "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!" von Thomas Steiner). Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist in einem GIF selbst enthalten und wird von diesen Einstellungen nicht beeinflusst.![Screenshot, der zeigt, wie man auf einem MAC OS die Bewegung reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Reader-Modus in Browsern

- Aktivieren Sie Inhaltsblocker; entfernt Werbung und reduziert und/oder beseitigt Ablenkungen
- Ermöglicht Text-to-Speech
- In bestimmten Browsern können Schriften nach Wahl aktiviert werden
- Aktivieren Sie Page Zoom

#### Schalten Sie animierte GIFs im Browser ab

Browser bieten ihren Benutzern viel Macht; es ist nur eine Frage, zu wissen, wohin man gehen muss. In Firefox wird erklärt, dass durch Ändern des Wertes von **image.animation_mode** von "normal" auf "none" alle animierten Bilder blockiert werden. Um dies rückgängig zu machen, müssen Sie den Wert wieder auf "normal" ändern.

![Screenshot von image.animation.mode in Firefox ausgewählt](image_animation_mode.png)

#### Verwenden Sie Browser-Erweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist GIF Blocker eine im Web Store verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es Ihnen ermöglicht, GIFs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browser-Erweiterung, die es Ihnen ermöglicht, unter anderem auf Graustufen und Dyslexi-Schriftart umzustellen.

![Screenshot, der zeigt, welche Modi ein Benutzer im Beeline Reader im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheits-Funktionen des Betriebssystems

Die meisten Betriebssysteme wie Windows 10 verfügen über überraschend leistungsstarke Barrierefreiheits-Optionen. Sie sind in der Regel recht einfach zu finden, indem man das Wort „Barrierefreiheit“ in die Suchleiste des Betriebssystems eingibt (oder sagt).

#### Schalten Sie Animationen im Betriebssystem aus

Im Windows 10 Betriebssystem hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies wird nicht auf animierte GIFs wirken; die Quelle der Animation ist in einem GIF selbst enthalten und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die ein Schädel-Hirn-Trauma (TBI) erlitten haben, können sehr empfindlich auf Farben reagieren; es kann von ihnen einen so großen „Einsatz an kognitiver Energie“ erfordern, dass keine Energie für andere tägliche Aufgaben übrig bleibt. Die Aktivierung einer Graustufendarstellung der Inhalte reduziert die kognitive Belastung. Es kann auch Benutzern mit anderen Behinderungen zugutekommen. Eine interessante Diskussion von Benutzern über die Vorteile der Verwendung von Graustufen finden Sie im Diskussionsfaden "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)". Besonders interessant ist ein Benutzer, der an Photosensitiver Epilepsie leidet und sie benutzt, wenn er sich „anfällig für Anfälle“ fühlt.

Die meisten Betriebssysteme bieten eine Möglichkeit, dem Benutzer Anpassungen am Arbeitsplatz zu ermöglichen. Im folgenden Screenshot sehen Sie ein Beispiel für Windows 10 Barrierefreiheits-Einstellungen, in denen Farbfilter ausgewählt werden können. Graustufen werden aktiviert, wenn der Farbfilter-Button auf „ein“ gestellt wird.

![Zeigt Windows 10 Barrierefreiheits-Einstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn/Accessibility)
- [Webbarrierefreiheit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Farbsehsimulation](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen, vielen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
