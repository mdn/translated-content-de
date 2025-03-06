---
title: "Barrierefreiheit: Wie Personalisierung hilft, sicherer zu surfen"
short-title: Personalisierung, um sicherer zu surfen
slug: Web/Accessibility/Guides/Browsing_safely
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieser Artikel befasst sich damit, Webinhalte für Menschen mit vestibulären Störungen und ihre Unterstützenden zugänglich zu machen, indem Personalisierungs- und Barrierefreiheitseinstellungen genutzt werden, die in die Betriebssysteme integriert sind. Die Nutzung von Personalisierungseinstellungen kann dazu beitragen, die Exposition gegenüber Inhalten zu verhindern, die Anfälle und/oder andere körperliche Reaktionen hervorrufen könnten.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel, "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Blinken kann durch das Display, den Computer, der das Bild rendert oder durch die gerenderten Inhalte selbst verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Diese können durch das Design und die Geschwindigkeit des Displays und Computers adressiert werden.

### Hardware und Betriebssysteme auf vielen Computern bieten Kontrollmöglichkeiten, die Entwicklern nicht zur Verfügung stehen

Der Benutzer kann viel tun, um sich selbst zu schützen, indem er sein Betriebssystem sowie dessen Personalisierungs- und Barrierefreiheitseinstellungen kennt. Personen im öffentlichen Sektor, die Menschen mit besonderen Empfindlichkeiten unterstützen müssen, sollten in Betracht ziehen, mindestens einen Arbeitsplatz einzurichten und sich mit dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine kostensparende Maßnahme sein. Ein Arbeitsplatz kann so eingerichtet werden, dass er sowohl eine Person mit Sehbehinderung (benötigt hohen Kontrast) als auch eine Person mit photosensiblen Anfälligkeiten unterstützt, indem Personalisierungs- und Barrierefreiheitseinstellungen angepasst werden.

### Nutzen Sie moderne Browser. Erlernen Sie Personalisierungs- und Barrierefreiheitseinstellungen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer eine Erlebnismit reduzierter Bewegung angefordert hat. Der Benutzer würde dies über eine Barrierefreiheitsschnittstelle zugänglich machen, wie unten zu sehen ist.

![Bildschirmfoto, das zeigt, wie man Animationen unter Windows 10 ausschaltet.](android-remove-animations.png)

CSS Transition Events werden unterstützt. Beispiele beinhalten:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Auto-Play nicht aktivieren (funktioniert nicht für GIFs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den OS-Barrierefreiheitseinstellungen für Apple aus (Bildquelle: developers.google.com aus Thomas Steiners Artikel "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist innerhalb eines GIFs eigenständig und wird von diesen Einstellungen nicht beeinflusst.![Bildschirmfoto, das zeigt, wie man Bewegungen auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Reader-Modus in Browsern

- Aktivieren sie Inhaltsblocker; entfernt Werbung und verringert und/oder beseitigt Ablenkungen
- Ermöglicht Text-to-Speech
- In bestimmten Browsern, ermöglichen Sie das Auswählen von Schriftarten
- Aktivieren Sie Seitenzoom

#### Animierte GIFs im Browser ausschalten

Browser bieten ihren Nutzern viel Macht; es ist nur eine Frage des Wissens, wohin man gehen muss. Am Beispiel von Firefox erklärt es, dass durch die Änderung des Werts der **image.animation_mode** von "normal" auf "none", alle animierten Bilder blockiert werden. Um das rückgängig zu machen, müssen Sie den Wert zurück auf "normal" ändern.

![Screenshot von image.animation.mode in Firefox ausgewählt](image_animation_mode.png)

#### Nutzen Sie Browsererweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist der GIF Blocker eine Erweiterung, die im Webstore verfügbar ist.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es Ihnen ermöglicht, GIFs wie mit einem Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browsererweiterung, die es Ihnen erlaubt, unter anderem auf Graustufen und Dyslexie-Schriftarten umzustellen

![Screenshot, das die Modi des Beeline Readers zeigt, die ein Benutzer im Browser anpassen kann](beelinereader.png)

### Nutzen Sie die Barrierefreiheitseigenschaften des Betriebssystems

Die meisten Betriebssysteme, wie Windows 10, haben Barrierefreiheitsoptionen, die überraschend leistungsstark sind. In der Regel sind sie ziemlich einfach zu finden, indem man das Wort "Barrierefreiheit" in das Suchfeld des Betriebssystems eingibt (oder spricht).

#### Animationen im Betriebssystem ausschalten

Im Betriebssystem Windows 10 hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist innerhalb eines GIFs eigenständig und wird von diesen Einstellungen nicht beeinflusst.

![Bildschirmfoto, das zeigt, wie man Animationen in Windows 10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die eine traumatische Hirnverletzung (TBI) erlitten haben, können empfindlich auf Farben reagieren; es kann von ihnen eine so große "Investition an kognitiver Energie" erfordern, dass keine Energie mehr für andere tägliche Aufgaben übrig bleibt. Die Aktivierung der Graustufenpräsentation von Inhalten reduziert die kognitive Belastung. Es kann auch Nutzern mit anderen Behinderungen helfen. Eine interessante Diskussion von Nutzern über die Vorteile der Nutzung von Graustufen findet sich im Diskussionsthread, "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)". Besonders interessant ist ein Nutzer, der an photosensitiver Epilepsie leidet und es nutzt, wenn er sich "anfallsartig" fühlt.

Die meisten Betriebssysteme bieten die Möglichkeit, dem Benutzer eine Anpassung am Arbeitsplatz zu ermöglichen. Auf dem Screenshot unten sehen Sie ein Beispiel für Windows 10 Barrierefreiheitseinstellungen, die das Auswählen von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn die Schaltfläche für Farbfilter auf "ein" geschaltet ist.

![Zeigt Windows 10 Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Leitfaden zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Simulation von Farbensehen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen herzlichen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und seine große Hilfe zu diesem Thema.
