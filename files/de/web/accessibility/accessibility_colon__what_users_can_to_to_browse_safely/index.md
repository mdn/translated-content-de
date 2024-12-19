---
title: "Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen"
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Dieser Artikel behandelt, wie man Webinhalte zugänglicher für Menschen mit vestibulären Störungen und diejenigen, die sie unterstützen, gestalten kann. Hierbei wird auf die Personalisierungs- und Barrierefreiheitseinstellungen zurückgegriffen, die in die Betriebssysteme integriert sind. Die Nutzung von Personalisierungseinstellungen kann helfen, die Exposition gegenüber Inhalten zu vermeiden, die epileptische Anfälle und/oder andere physische Reaktionen auslösen können.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Blinken kann durch das Display, die Bildverarbeitung des Computers oder durch die gerenderten Inhalte verursacht werden. Der Autor hat keine Kontrolle über die ersten beiden. Sie können durch das Design und die Geschwindigkeit des Displays und des Computers angesprochen werden.

### Viele Computer-Hardware und Betriebssysteme bieten Steuerungsmöglichkeiten, die Entwicklern nicht zur Verfügung stehen

Der Benutzer kann viel dafür tun, sich zu schützen, indem er sein Betriebssystem, dessen Personalisierungs- und Barrierefreiheitseinstellungen lernt. Personen im öffentlichen Sektor, die Personen mit besonderen Empfindlichkeiten unterbringen müssen, sollten erwägen, mindestens einen Arbeitsplatz darauf vorzubereiten und sich mit dessen Personalisierung und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich ein geldsparendes Unterfangen sein. Ein Arbeitsplatz kann sowohl für eine sehbehinderte Person (erfordert hohen Kontrast) als auch für eine Person mit fotosensitiven Empfindlichkeiten vorbereitet werden, indem Personalisierungs- und Barrierefreiheitseinstellungen angepasst werden.

### Verwenden Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer ein Erlebnis mit reduzierter Bewegung angefordert hat. Der Benutzer würde hierüber über eine Barrierefreiheitsschnittstelle zugreifen, wie unten dargestellt.

![Screenshot zeigt, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Übergangsevents werden unterstützt. Beispiele sind:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Auto-Play nicht aktivieren (funktioniert nicht für GIFs)

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den Betriebssystem-Barrierefreiheitseinstellungen für Apple (Bildquelle: developers.google.com aus Thomas Steiners Artikel "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!"). Dies funktioniert nicht bei animierten GIFs; die Animationsquelle ist in einem gif enthalten und wird von diesen Einstellungen nicht beeinflusst.![Screenshot zeigt, wie man Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Inhaltsblocker aktivieren; entfernt Werbung, reduziert und/oder beseitigt Ablenkungen
- Ermöglicht Text-to-Speech
- In bestimmten Browsern, Aktivieren von Schriften nach Wahl
- Seitenzoom aktivieren

#### Animierte GIFs im Browser ausschalten

Browser bieten ihren Benutzern viele Möglichkeiten; es ist nur eine Frage des Wissens, wohin man gehen muss. Am Beispiel von Firefox erklärt es, dass durch das Ändern des Wertes der **image.animation_mode** von "normal" auf "none" alle animierten Bilder blockiert werden. Um dies rückgängig zu machen, müssen Sie den Wert wieder auf "normal" ändern.

![Screenshot von image.animation.mode ausgewählt in Firefox](image_animation_mode.png)

#### Verwenden Sie Browsererweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome ist GIF Blocker eine im Webstore verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die Ihnen erlaubt, GIFs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browsererweiterung, die Ihnen erlaubt, auf Graustufen und Dyslexie-Schriftarten umzuschalten, unter anderem.

![Screenshot zeigt Modi des Beeline Reader, die ein Benutzer im Browser einstellen kann](beelinereader.png)

### Nutzen Sie Barrierefreiheitsfunktionen des Betriebssystems

Die meisten Betriebssysteme wie Windows 10 haben überraschend leistungsfähige Barrierefreiheitsoptionen. In der Regel sind sie ziemlich einfach zu finden, indem man im Suchfinder des Betriebssystems das Wort "Barrierefreiheit" eingibt (oder sagt).

#### Animationen im Betriebssystem ausschalten

Im Windows 10 Betriebssystem hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies wird nicht bei animierten GIFs funktionieren; die Animationsquelle ist in einem gif enthalten und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot zeigt, wie man Animationen in Windows10 ausschaltet](turnoffanimationsinwindows.png)

#### Graustufen

Wer eine Schädel-Hirn-Verletzung (TBI) erlitten hat, kann sehr empfindlich auf Farben reagieren; es kann einen so großen "kognitiven Energieaufwand" von ihnen erfordern, dass keine Energie mehr für andere tägliche Aufgaben übrig bleibt. Die Darstellung der Inhalte in Graustufen reduziert die kognitive Belastung. Es kann auch Benutzern mit anderen Behinderungen helfen. Eine interessante Diskussion von Benutzern über die Vorteile der Verwendung von Graustufen finden Sie im Diskussionsthread "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)". Besonders interessant ist ein Benutzer, der an Photensoren-Epilepsie leidet und es verwendet, wenn er sich "krampfhaft" fühlt.

Die meisten Betriebssysteme verfügen über eine Möglichkeit, die es dem Benutzer ermöglicht, am Arbeitsplatz Anpassungen vorzunehmen. Im unten gezeigten Screenshot sehen Sie ein Beispiel für Windows 10 Barrierefreiheitseinstellungen, die die Auswahl von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn der Farbfilter-Schalter auf "ein" gestellt ist.

![Zeigt Windows 10 Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheits-Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Farbsimulation](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen, vielen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
