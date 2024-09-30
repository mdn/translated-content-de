---
title: "Accessibility: Was Benutzer tun können, um sicherer zu surfen"
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Dieser Artikel behandelt die Erstellung von Webinhalten, die für Personen mit vestibulären Störungen und ihre Unterstützer zugänglich sind, indem die Personalisierungs- und Barrierefreiheitseinstellungen der Betriebssysteme genutzt werden. Die Nutzung von Personalisierungseinstellungen kann helfen, eine Exposition gegenüber Inhalten, die zu Anfällen und/oder anderen körperlichen Reaktionen führen, zu verhindern.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel "[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)"

> Blinken kann durch das Display, den Computer, der das Bild rendert, oder durch den renderten Inhalt verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Diese können durch das Design und die Geschwindigkeit des Displays und des Computers angegangen werden.

### Hardware und Betriebssysteme auf vielen Computern bieten Kontrolle, die Entwicklern nicht gewährt wird

Der Benutzer kann viel tun, um sich selbst zu schützen, indem er sein Betriebssystem, dessen Personalisierungs- und Barrierefreiheitseinstellungen kennenlernt. Personen im öffentlichen Sektor, die sich um Personen mit besonderen Empfindlichkeiten kümmern müssen, sollten erwägen, mindestens einen Arbeitsplatz einzurichten und sich mit dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine kostensparende Maßnahme sein. Ein Arbeitsplatz kann so eingerichtet werden, dass er sowohl einer Person mit Sehschwäche (benötigt hohen Kontrast) als auch einer Person mit photosensiblen Empfindlichkeiten gerecht wird, indem die Personalisierungs- und Barrierefreiheitseinstellungen angepasst werden.

### Verwenden Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer eine reduzierte Bewegungserfahrung angefordert hat. Der Benutzer würde dies über eine Barrierefreiheitsschnittstelle, wie unten gezeigt, erreichen.

![Screenshot, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Transition-Ereignisse werden unterstützt. Beispiele beinhalten:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Deaktivieren Sie Auto-Play (funktioniert nicht für Gifs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegungen reduzieren" in den OS-Accessibility-Einstellungen für Apple (Bildquelle: developers.google.com aus dem Artikel von Thomas Steiner "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies wird auf animierte Gifs nicht wirken; die Quelle der Animation ist selbst innerhalb eines Gifs enthalten und wird von diesen Einstellungen nicht beeinflusst.![Screenshot, wie man Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Aktivieren Sie Inhaltsblocker; Entfernt Werbung, reduziert und/oder entfernt Ablenkungen
- Aktiviert Text-zu-Sprache
- In bestimmten Browsern Schriftarten nach Wahl aktivieren
- Seitenzoom aktivieren

#### Schalten Sie animierte GIFs im Browser aus

Browser bieten ihren Nutzern viel Macht; es ist nur eine Frage, zu wissen, wohin man gehen muss. Mit Firefox als Beispiel erklärt es, dass durch Ändern des Werts der **image.animation_mode** von "normal" auf "none" alle animierten Bilder blockiert werden. Um dies rückgängig zu machen, müssen Sie den Wert zurück auf "normal" ändern.

![Screenshot von image.animation.mode ausgewählt in Firefox](image_animation_mode.png)

#### Verwenden Sie Browser-Erweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist der GIF Blocker eine im Webstore verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es Ihnen ermöglicht, Gifs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browser-Erweiterung, die Ihnen erlaubt, unter anderem auf Graustufen und Dyslexi-Schriftart einzustellen.

![Screenshot, die Modi des Beeline Reader zeigt, die ein Benutzer im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheitseigenschaften des Betriebssystems

Die meisten Betriebssysteme wie Windows 10 haben überraschend leistungsstarke Barrierefreiheitsoptionen. Normalerweise sind sie recht einfach zu finden, indem man das Wort "Barrierefreiheit" in die Suchfunktion des Betriebssystems eingibt (oder sagt).

#### Schalten Sie Animationen im Betriebssystem aus

Im Betriebssystem Windows 10 hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies wird auf animierte Gifs nicht wirken; die Quelle der Animation ist selbst innerhalb eines Gifs enthalten und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot, wie man Animationen in Windows 10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die ein traumatisches Hirntrauma (TBI) erlitten haben, können hochgradig empfindlich auf Farben reagieren; es kann einen so großen "Einsatz von kognitiver Energie" erfordern, dass keine Energie mehr für andere tägliche Aufgaben bleibt. Die Aktivierung der Graustufen-Darstellung der Inhalte reduziert die kognitive Arbeitslast. Es kann auch anderen Nutzern mit Behinderungen helfen. Eine interessante Diskussion von Nutzern über die Vorteile der Verwendung von Graustufen ist im Diskussionsstrang "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" zu finden. Besonders interessant ist ein Benutzer, der an Photosensibler Epilepsie leidet und sie verwendet, wenn er sich "anfällig für Anfälle" fühlt.

Die meisten Betriebssysteme bieten eine Möglichkeit, dem Benutzer eine Anpassung am Arbeitsplatz zu ermöglichen. Im Screenshot unten sehen Sie ein Beispiel für die Barrierefreiheitseinstellungen von Windows 10, die die Auswahl von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn der Farbfilter-Schalter auf "ein" gestellt ist.

![Zeigt Windows 10 Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn/Accessibility)
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Farbsimulationsvision](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Viele, viele Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Gespräche und enorme Hilfe zu diesem Thema.
