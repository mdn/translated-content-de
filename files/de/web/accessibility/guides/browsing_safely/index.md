---
title: "Barrierefreiheit: Welche Personalisierung hilft, sicherer zu browsen"
short-title: Personalisierung zum sicheren Browsen
slug: Web/Accessibility/Guides/Browsing_safely
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel behandelt, wie Webinhalte für Personen mit vestibulären Störungen und deren Unterstützer zugänglich gemacht werden können, indem Personalisierungs- und Barrierefreiheitseinstellungen der Betriebssysteme genutzt werden. Das Nutzen von Personalisierungseinstellungen kann helfen, sich vor Inhalten zu schützen, die zu Anfällen und/oder anderen körperlichen Reaktionen führen können.

## Personalisierungs- und Barrierefreiheitseinstellungen

Aus dem Artikel: "**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"

> Blinken kann durch das Display, die Bildverarbeitung des Computers oder durch die dargestellten Inhalte verursacht werden. Der Autor hat auf die ersten beiden keinen Einfluss. Sie können durch das Design und die Geschwindigkeit des Displays und Computers angesprochen werden.

### Hardware und Betriebssysteme auf vielen Computern bieten Kontrolle, die Entwicklern nicht zur Verfügung steht

Der Benutzer kann viel tun, um sich selbst zu schützen, indem er sein Betriebssystem, dessen Personalisierungs- und Barrierefreiheitseinstellungen kennenlernt. Personen im öffentlichen Sektor, die Personen mit besonderen Empfindlichkeiten aufnehmen müssen, sollten in Betracht ziehen, mindestens einen Arbeitsplatz bereitzustellen und sich mit dessen Personalisierungs- und Barrierefreiheitseinstellungen vertraut zu machen. Das Verständnis von Personalisierungs- und Barrierefreiheitseinstellungen kann tatsächlich eine kostensparende Maßnahme sein. Ein Arbeitsplatz kann so eingerichtet werden, dass sowohl eine sehbehinderte Person (die einen hohen Kontrast benötigt) als auch eine Person mit lichtempfindlichen Empfindlichkeiten durch die Anpassung von Personalisierungs- und Barrierefreiheitseinstellungen unterstützt werden können.

### Verwenden Sie moderne Browser. Lernen Sie Personalisierungs- und Barrierefreiheitseinstellungen kennen

Moderne Browser unterstützen das CSS-Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Browser können erkennen, ob ein Benutzer eine Erfahrung mit reduzierter Bewegung angefordert hat. Der Benutzer würde darauf über eine Barrierefreiheitsschnittstelle zugreifen, wie unten gezeigt.

![Screenshot, der zeigt, wie man Animationen in Windows 10 ausschaltet.](android-remove-animations.png)

CSS-Übergangsereignisse werden unterstützt. Beispiele beinhalten:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 und höher (Desktop)

Automatisches Abspielen nicht aktivieren (funktioniert nicht für GIFs).

#### iOS Safari 10.3 und höher (Mobil und Tablet)

Wählen Sie die Option "Bewegung reduzieren" in den Barrierefreiheitseinstellungen des Apple-Betriebssystems (Bildquelle: developers.google.com aus Thomas Steiners Artikel „Move Ya! Or maybe, don't, if the user prefers-reduced-motion!“). Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist innerhalb eines GIFs eigenständig und wird von diesen Einstellungen nicht beeinflusst.![Screenshot, der zeigt, wie man Bewegung auf einem MAC OS reduziert](macos-reduce-motion.png)

#### Verwenden Sie den Lesemodus in Browsern

- Aktivieren Sie Inhaltsblocker; entfernt Werbung, reduziert und/oder entfernt Ablenkungen
- Ermöglicht Text-zu-Sprache
- In bestimmten Browsern können Schriftarten nach Wahl aktiviert werden
- Zoom der Seite aktivieren

#### Animierte GIFs im Browser ausschalten

Browser bieten ihren Benutzern viel Macht; es ist nur eine Frage, wo man hin muss. Anhand von Firefox wird erklärt, dass durch Ändern des Werts des **image.animation_mode** von „normal“ auf „none“ alle animierten Bilder blockiert werden. Um dies rückgängig zu machen, müssen Sie den Wert zurück auf „normal“ ändern.

![Screenshot von image.animation.mode in Firefox ausgewählt](image_animation_mode.png)

#### Verwenden Sie Browser-Erweiterungen

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Für Chrome, GIF Blocker ist eine im Webstore verfügbare Erweiterung.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber ist eine Chrome-Erweiterung, die es ermöglicht, GIFs wie einen Videoplayer zu steuern. Es gibt ein GitHub-Repository dafür unter **<https://github.com/0ui/gif-scrubber>**
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader hat eine Browser-Erweiterung, mit der Sie unter anderem Graustufen und Dyslexi-Schriftarten einstellen können

![Screenshot, der zeigt, welche Modi der Beeline Reader in einem Browser angepasst werden können](beelinereader.png)

### Nutzen Sie die Barrierefreiheitsfunktionen des Betriebssystems

Die meisten Betriebssysteme wie Windows 10, haben überraschend leistungsstarke Barrierefreiheitsoptionen. Sie sind in der Regel recht einfach zu finden, indem man das Wort „Barrierefreiheit“ im Suchfinder des Betriebssystems eingibt (oder sagt).

#### Animationen im Betriebssystem ausschalten

Im Betriebssystem Windows 10 hat der Benutzer die Möglichkeit, Animationen auszuschalten. Dies funktioniert nicht bei animierten GIFs; die Quelle der Animation ist innerhalb eines GIFs eigenständig und wird von diesen Einstellungen nicht beeinflusst.

![Screenshot, der zeigt, wie Animationen in Windows 10 ausgeschaltet werden](turnoffanimationsinwindows.png)

#### Graustufen

Personen, die ein Schädel-Hirn-Trauma (TBI) erlitten haben, können sehr empfindlich auf Farben reagieren; es kann so viel "kognitive Energie" erfordern, dass keine Energie mehr für andere tägliche Aufgaben bleibt. Die Darstellung von Inhalten in Graustufen reduziert die kognitive Arbeitsbelastung. Es kann auch Benutzern mit anderen Behinderungen helfen. Eine interessante Diskussion der Benutzer über die Vorteile der Verwendung von Graustufen finden Sie im Diskussionsthread "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)". Besonders interessant ist ein Benutzer, der an lichtempfindlicher Epilepsie leidet und die Einstellung nutzt, wenn er sich „krampfanfällig“ fühlt.

Die meisten Betriebssysteme bieten eine Möglichkeit, die der Benutzer an der Arbeitsstation anpassen kann. Im Screenshot unten sehen Sie ein Beispiel für Windows 10 Barrierefreiheitseinstellungen, die die Auswahl von Farbfiltern ermöglichen. Graustufen werden aktiviert, wenn der Farbfilter-Schalter auf "ein" gestellt ist.

![Zeigt Windows 10 Barrierefreiheitseinstellungen für Graustufen](colorfiltersgrayscaleinwindows.png)

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit Lernpfad](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit bei Anfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Simulation der Farbsehschwäche](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Diskussion: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### Mitwirkende

Vielen, vielen Dank an Eric Eggert von [Knowbility;](https://knowbility.org/) für seine Diskussionen und große Hilfe zu diesem Thema.
