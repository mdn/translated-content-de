---
title: "Barrierefreiheit: Welche Personalisierung hilft, sicherer zu surfen"
short-title: Personalisierung, um sicherer zu surfen
slug: Web/Accessibility/Guides/Browsing_safely
l10n:
  sourceCommit: 813a03e3affaad31a6c975628a1b705fa568f095
---

Dieser Artikel behandelt die Zugänglichkeit von Webinhalten für Menschen mit vestibulären Störungen und deren Unterstützende, indem Personalisierungs- und Barrierefreiheitseinstellungen der Betriebssysteme genutzt werden. Personalisierungseinstellungen zu nutzen, kann dazu beitragen, die Exponierung gegenüber Inhalten zu verhindern, die zu Anfällen und/oder anderen physischen Reaktionen führen.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Blinken kann durch die Anzeige, der Computer, der das Bild rendert, oder durch die Inhalte, die gerendert werden, verursacht werden. Der Autor hat auf die ersten beiden keinen Einfluss. Sie können durch das Design und die Geschwindigkeit der Anzeige und des Computers adressiert werden.

### Hardware und Betriebssysteme auf vielen Computern bieten Kontrolle, die Entwicklern nicht gewährt wird

Der Benutzer kann viel tun, um sich selbst zu schützen, indem er sich über sein Betriebssystem und seine Personalisierungs- und Barrierefreiheitseinstellungen informiert. Personen im öffentlichen Sektor, die Menschen mit besonderen Empfindlichkeiten entgegenkommen müssen, sollten in Betracht ziehen, mindestens einen Arbeitsplatz bereitzustellen und sich mit dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine kostensparende Maßnahme sein. Ein Arbeitsplatz kann so eingerichtet werden, dass er sowohl eine Person mit Sehbehinderung (die hohe Kontraste benötigt) als auch eine Person mit fotosensitiven Empfindlichkeiten durch Anpassen von Personalisierungs- und Barrierefreiheitseinstellungen berücksichtigt.

### Verwenden Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen kennen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer eine reduzierte Bewegungserfahrung angefordert hat. Der Benutzer würde über eine Barrierefreiheitsoberfläche darauf zugreifen, wie im Folgenden gezeigt.

![Screenshot, der zeigt, wie Animationen in Windows 10 deaktiviert werden.](android-remove-animations.png)

CSS-Übergangsereignisse werden unterstützt. Beispiele umfassen:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Automatische Wiedergabe nicht aktivieren (funktioniert nicht für GIFs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den Barrierefreiheitseinstellungen des Apple-Betriebssystems (Bildquelle: developers.google.com aus Thomas Steiners Artikel "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist innerhalb eines GIFs selbst enthalten und wird von diesen Einstellungen nicht beeinflusst.![Screenshot, der zeigt, wie man die Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Aktivieren Sie Inhaltsblocker; sie entfernen Werbung und/oder Ablenkungen
- Aktiviert Text-to-Speech
- In bestimmten Browsern können Schriftarten nach Wahl aktiviert werden
- Seitenskalierung aktivieren

#### Deaktivieren Sie animierte GIFs im Browser

Browser bieten ihren Benutzern viel Macht; es ist nur eine Frage, zu wissen, wo man schauen muss. Am Beispiel von Firefox wird erklärt, dass durch Ändern des Wertes von **image.animation_mode** von "normal" auf "none" alle animierten Bilder blockiert werden. Um dies rückgängig zu machen, müssen Sie den Wert wieder auf "normal" ändern

![Screenshot des ausgewählten image.animation.mode in Firefox](image_animation_mode.png)

#### Verwenden Sie Browser-Erweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist Gif Blocker eine im Web Store verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es Ihnen ermöglicht, GIFs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader verfügt über eine Browser-Erweiterung, mit der Sie u.a. Graustufen und Dyslexi-Schriftart einstellen können.

![Screenshot, der die Modi von Beeline Reader zeigt, die ein Benutzer im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheitsfunktionen des Betriebssystems

Die meisten Betriebssysteme wie Windows 10 verfügen über Barrierefreiheitsoptionen, die überraschend leistungsstark sind. Normalerweise sind sie leicht zu finden, indem Sie das Wort "Barrierefreiheit" in der Suchfunktion des Betriebssystems eingeben (oder aussprechen).

#### Deaktivieren Sie Animationen im Betriebssystem

Im Windows 10-Betriebssystem haben Benutzer die Möglichkeit, Animationen zu deaktivieren. Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist innerhalb eines GIFs selbst enthalten und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot, der zeigt, wie Sie Animationen in Windows10 deaktivieren](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die eine traumatische Hirnverletzung (TBI) erlitten haben, können hoch empfindlich auf Farben reagieren; es kann von ihnen einen so großen "Einsatz von kognitiver Energie" erfordern, dass keine Energie für andere tägliche Aufgaben bleibt. Das Aktivieren der Graustufenanzeige der Inhalte reduziert die kognitive Arbeitslast. Es kann auch andere Benutzer mit Behinderungen unterstützen. Eine interessante Diskussion von Benutzern über die Vorteile der Verwendung von Graustufen kann im Diskussionsthread "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" gefunden werden. Besonders interessant ist ein Benutzer, der an Photosensitiver Epilepsie leidet und diese nutzt, wenn er sich "anfällig für Anfälle" fühlt.

Die meisten Betriebssysteme bieten eine Möglichkeit, die Arbeitsstation anzupassen. Im nachstehenden Screenshot sehen Sie ein Beispiel für Windows 10 Barrierefreiheitseinstellungen, die es ermöglichen, Farbfilter auszuwählen. Graustufen werden aktiviert, wenn der Farbfilter-Schalter auf "ein" gestellt ist.

![Zeigt die Windows 10 Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Farbsicht-Simulation](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen, vielen Dank an Eric Eggert von [Knowbility](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
