---
title: "Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen"
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Dieser Artikel behandelt die Zugänglichmachung von Webinhalten für Menschen mit vestibulären Störungen und diejenigen, die sie unterstützen, indem Personalisierungs- und Barrierefreiheitseinstellungen der Betriebssysteme genutzt werden. Die Nutzung von Personalisierungseinstellungen kann helfen, die Exposition gegenüber Inhalten zu vermeiden, die Anfälle und / oder andere physische Reaktionen auslösen.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel, "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Ein Flackern kann durch das Display, den Computer, der das Bild rendert, oder durch den gerenderten Inhalt verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Diese können durch das Design und die Geschwindigkeit des Displays und des Computers adressiert werden.

### Hardware und Betriebssysteme auf vielen Computern bieten eine Steuerung, die Entwicklern nicht zugänglich ist

Der Benutzer kann viel für seinen Schutz tun, indem er sich mit seinem Betriebssystem, dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut macht. Personen im öffentlichen Sektor, die Menschen mit besonderen Empfindlichkeiten entgegenkommen müssen, sollten in Erwägung ziehen, mindestens einen Arbeitsplatz bereitzustellen und sich mit dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine kostensparende Maßnahme sein. Ein Arbeitsplatz kann so eingerichtet werden, dass er sowohl einer Person mit geringerem Sehvermögen (benötigt hohen Kontrast) als auch einer Person mit fotosensitiven Empfindlichkeiten gerecht wird, indem die Personalisierungs- und Barrierefreiheitseinstellungen angepasst werden.

### Moderne Browser verwenden. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen kennen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer eine verminderte Bewegungserfahrung angefordert hat. Der Benutzer würde dies über eine Barrierefreiheitsschnittstelle aufrufen, wie unten gezeigt.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Transition-Ereignisse werden unterstützt. Beispiele beinhalten:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Auto-Play nicht aktivieren (funktioniert nicht für GIFs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den Barrierefreiheitseinstellungen des Apple-Betriebssystems (Bildquelle: developers.google.com aus dem Artikel von Thomas Steiner "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist in einem GIF selbst enthalten und wird durch diese Einstellungen nicht beeinflusst.![Screenshot, der zeigt, wie man die Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Aktivieren Sie Inhaltsblocker; entfernt Anzeigen und reduziert und/oder entfernt Ablenkungen
- Aktiviert Text-to-Speech
- Ermöglicht in bestimmten Browsern die Wahl von Schriftarten
- Aktiviert Seitenzoom

#### Schalten Sie animierte GIFs im Browser aus

Browser bieten ihren Benutzern viele Möglichkeiten; es ist nur eine Frage, zu wissen, wohin man gehen muss. Am Beispiel von Firefox wird erklärt, dass alle animierten Bilder blockiert werden, indem der Wert von **image.animation_mode** von "normal" auf "none" geändert wird. Um dies rückgängig zu machen, müssen Sie den Wert zurück auf "normal" ändern.

![Screenshot von image.animation.mode ausgewählt in Firefox](image_animation_mode.png)

#### Verwenden Sie Browser-Erweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist GIF Blocker eine im Webstore verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die Ihnen ermöglicht, GIFs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dazu unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browser-Erweiterung, die es Ihnen ermöglicht, unter anderem Grayscale und Dyslexi-Schriftart einzurichten.

![Screenshot, der Modi des Beeline Reader zeigt, die ein Benutzer im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheitsfunktionen des Betriebssystems

Die meisten Betriebssysteme wie Windows 10 haben überraschend leistungsfähige Barrierefreiheitsoptionen. Normalerweise sind sie ziemlich einfach zu finden, indem man das Wort "Barrierefreiheit" in die Suchleiste des Betriebssystems eingibt (oder sagt).

#### Schalten Sie Animationen im Betriebssystem aus

Im Windows 10 Betriebssystem hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist in einem GIF selbst enthalten und wird durch diese Einstellungen nicht beeinflusst.

![Screenshot, der zeigt, wie man Animationen in Windows10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Menschen, die eine traumatische Hirnverletzung (TBI) erlitten haben, können gegenüber Farben äußerst empfindlich sein; es kann einen solchen "kognitiven Energieaufwand" erfordern, dass keine Energie für andere tägliche Aufgaben mehr übrig bleibt. Die Aktivierung der Graustufenpräsentation der Inhalte reduziert die kognitive Belastung. Es kann auch Benutzern mit anderen Behinderungen helfen. Eine interessante Diskussion von Benutzern über die Vorteile der Verwendung von Graustufen ist im Diskussionsfaden "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)" zu finden. Besonders interessant ist ein Benutzer mit Photosensitiver Epilepsie, der sie verwendet, wenn er sich "anfallsbereit" fühlt.

Die meisten Betriebssysteme bieten eine Möglichkeit, eine Anpassung am Arbeitsplatz vorzunehmen. Im Screenshot unten sehen Sie ein Beispiel für die Windows 10-Barrierefreiheitseinstellungen, die die Auswahl von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn der Farbfilter-Schalter auf "ein" gestellt ist.

![Zeigt Windows 10-Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Lernpfad zur Zugänglichkeit](/de/docs/Learn/Accessibility)
- [Web-Zugänglichkeit bei Anfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Farbsehensimulation](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen, vielen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
