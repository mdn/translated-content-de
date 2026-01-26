---
title: "Barrierefreiheit: Welche Personalisierung hilft, sicherer zu surfen"
short-title: Personalisierung, um sicherer zu surfen
slug: Web/Accessibility/Guides/Browsing_safely
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Dieser Artikel behandelt die Zugänglichkeit von Webinhalten für Menschen mit vestibulären Störungen und deren Unterstützer, indem Personalisierungs- und Barrierefreiheitseinstellungen genutzt werden, die in Betriebssystemen integriert sind. Die Nutzung von Personalisierungseinstellungen kann helfen, eine Exposition gegenüber Inhalten zu vermeiden, die zu Anfällen und/oder anderen körperlichen Reaktionen führen.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel, "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Das Flackern kann durch das Display, das Rendern des Bildes durch den Computer oder durch die gerenderten Inhalte verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Diese können durch das Design und die Geschwindigkeit des Displays und Computers adressiert werden.

### Hardware und Betriebssysteme auf vielen Computern bieten Kontrolle, die Entwicklern nicht zur Verfügung steht

Der Benutzer kann viel tun, um sich selbst zu schützen, indem er sein Betriebssystem sowie dessen Personalisierungs- und Barrierefreiheitseinstellungen lernt. Personen im öffentlichen Sektor, die Menschen mit besonderen Empfindlichkeiten aufnehmen müssen, sollten in Betracht ziehen, mindestens eine Arbeitsstation bereitzustellen und sich mit deren Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine geldsparende Maßnahme sein. Eine Arbeitsstation kann so eingerichtet werden, dass sie sowohl eine Person mit eingeschränktem Sehvermögen (benötigt hohen Kontrast) als auch eine Person mit lichtempfindlichen Anfälligkeiten durch Anpassung der Personalisierungs- und Barrierefreiheitseinstellungen aufnimmt.

### Verwenden Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer eine reduzierte Bewegungserfahrung angefordert hat. Der Benutzer würde dies über eine Barrierefreiheitsschnittstelle erreichen, wie unten zu sehen.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Übergangsevents werden unterstützt. Beispiele umfassen:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Aktivieren Sie nicht die automatische Wiedergabe (funktioniert nicht für GIFs).

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den OS-Barrierefreiheitseinstellungen für Apple (Bildquelle: developers.google.com aus Thomas Steiners Artikel "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist selbst im GIF enthalten und wird von diesen Einstellungen nicht beeinflusst.![Screenshot, der zeigt, wie man Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Aktivieren Sie Inhaltsblocker; entfernt Werbung und/oder Ablenkungen
- Aktiviert Text-zu-Sprache
- In bestimmten Browsern Auswahl von Schriftarten aktivieren
- Seitenzoom aktivieren

#### Schalten Sie animierte GIFs im Browser aus

Browser bieten ihren Benutzern viele Funktionen; man muss nur wissen, wo man suchen muss. Mit Firefox als Beispiel wird erklärt, dass durch Ändern des Wertes der **image.animation_mode** von "normal" auf "none" alle animierten Bilder blockiert werden. Um dies rückgängig zu machen, müssen Sie den Wert wieder auf "normal" ändern.

![Screenshot von image.animation.mode ausgewählt in Firefox](image_animation_mode.png)

#### Verwenden Sie Browsererweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist GIF Blocker eine im Webstore verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es Ihnen ermöglicht, GIFs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browsererweiterung, die es Ihnen ermöglicht, unter anderem Graustufen und Dyslexi-Schriftarten einzustellen.

![Screenshot, der Modi des Beeline Reader zeigt, die ein Benutzer im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheitsfunktionen des Betriebssystems

Die meisten Betriebssysteme wie Windows 10, haben überraschend leistungsfähige Barrierefreiheitsoptionen. Sie sind normalerweise ziemlich leicht zu finden, indem man das Wort "Barrierefreiheit" in das Suchfeld des Betriebssystems eingibt (oder spricht).

#### Schalten Sie Animationen im Betriebssystem aus

Im Betriebssystem Windows 10 hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist selbst im GIF enthalten und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die ein Schädel-Hirn-Trauma (TBI) erlitten haben, können sehr empfindlich auf Farben reagieren; es kann eine so große "Investition kognitiver Energie" von ihrer Seite erfordern, dass keine Energie für andere tägliche Aufgaben übrig bleibt. Das Aktivieren der Graustufenanzeige der Inhalte reduziert die kognitive Belastung. Es kann auch anderen Benutzern mit Behinderungen helfen. Eine interessante Diskussion über die Vorteile der Nutzung von Graustufen finden Sie im Diskussionsthread, "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)". Besonders interessant ist ein Benutzer mit photosensitiver Epilepsie, der es nutzt, wenn er sich "anfallsartig" fühlt.

Die meisten Betriebssysteme haben Möglichkeiten, dem Benutzer eine Anpassung am Arbeitsplatz zu ermöglichen. Im untenstehenden Screenshot sehen Sie ein Beispiel für Windows 10-Barrierefreiheitseinstellungen, die die Auswahl von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn der Farbfilter-Schalter auf "ein" geschaltet ist.

![Zeigt Windows 10-Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Simulation der Farbsehfähigkeit](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen, vielen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
