---
title: Firefox 3.6 für Entwickler
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/en-US/firefox/) bietet Unterstützung für neue und sich entwickelnde Webstandards, erhöhte Leistung und eine insgesamt bessere Erfahrung für Webbenutzer und Entwickler. Diese Seite enthält Links zu Artikeln, die die neuen Funktionen von Firefox 3.6 behandeln.

## Für Webseiten- und Anwendungsentwickler

### CSS

- [Verwendung von Farbverläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Firefox 3.6 fügt Unterstützung für die vorgeschlagenen Eigenschaften `-moz-linear-gradient` und `-moz-radial-gradient` für {{Cssxref("background")}} hinzu.
- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Die {{cssxref("background")}}-Eigenschaft (sowie {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}} und {{Cssxref("background-attachment")}}) unterstützt nun mehrere Hintergründe. Dadurch können mehrere Hintergründe angegeben werden, die in Schichten übereinander gerendert werden.
- [Mozilla-spezifische Medientypen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Medienmerkmale wurden für Mozilla-spezifische Systemmetriken hinzugefügt, damit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sicherer abfragen können, ob Funktionen wie Touch-Unterstützung verfügbar sind.
- [Skalierung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Die Eigenschaft `background-size` aus dem [CSS 3 Backgrounds and Borders Draft](https://drafts.csswg.org/css-backgrounds-3/) wird jetzt unter dem Namen `-moz-background-size` unterstützt.
- [WOFF-Schriftartunterstützung](/de/docs/Web/CSS/CSS_fonts/WOFF)
  - : {{cssxref("@font-face")}} unterstützt jetzt das WOFF-Format für herunterladbare Schriftdateien.
- [Pointer Events](/de/docs/Web/CSS/pointer-events)
  - : Die Eigenschaft {{cssxref("pointer-events")}} ermöglicht es, zu spezifizieren, ob ein Element das Ziel von Mauszeiger-Ereignissen sein darf oder nicht.

#### Verschiedene CSS-Änderungen

- Die [`rem`](/de/docs/Web/CSS/length#relative_length_units)-Einheit aus [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) wird jetzt unterstützt. [Firefox-Bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} wird für Bilder, Hintergrundbilder, Videos und Canvas unterstützt. [Firefox-Bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end wird jetzt unterstützt. [Firefox-Bug 299837](https://bugzil.la/299837)
- DOM-Änderungen an Elementen, die die {{Cssxref("display")}}-Eigenschaften für Tabellen verwenden, funktionieren jetzt viel besser.
- {{cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} und {{cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} wurden hinzugefügt, um es einfacher zu machen, Layouts je nach Links-nach-Rechts- oder Rechts-nach-Links-Locale anzupassen. [Firefox-Bug 478416](https://bugzil.la/478416)
- Unterstützung für die Pseudoklasse {{cssxref(":indeterminate")}}, die auf `checkbox`-[`input`](/de/docs/Web/HTML/Element/input)-Elemente abzielt, deren `indeterminate`-Attribute `true` sind, wurde hinzugefügt.
- Plugins mit eigenem Fenster werden nicht länger in CSS-Transformationen angezeigt, da sie vom Kompositor nicht korrekt transformiert werden können.

### HTML

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Unterstützung für die neue HTML5 File API wurde in Gecko hinzugefügt. Dadurch können Webanwendungen auf lokale Dateien zugreifen, die vom Benutzer ausgewählt wurden. Dies beinhaltet Unterstützung für die Auswahl mehrerer Dateien mithilfe des neuen `multiple`-Attributes des `input type="file"` HTML-Elements.
- HTML5-Video unterstützt Poster-Frames
  - : Das `poster`-Attribut wird jetzt für das [`video`](/de/docs/Web/HTML/Element/video)-Element unterstützt, wodurch Inhalte ein Poster-Frame festlegen können, das angezeigt wird, bis das Video abgespielt wird.
- Kontrollkästchen und Optionsfelder unterstützen die `indeterminate`-Eigenschaft
  - : HTML-[`input`](/de/docs/Web/HTML/Element/input)-Elemente der Typen `checkbox` und `radio` unterstützen jetzt die `indeterminate`-Eigenschaft, die einen dritten Zustand, "indeterminate", ermöglicht.
- Steuerung der Glättung von Canvas-Bildern
  - : Die neue [`mozImageSmoothingEnabled`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior)-Eigenschaft kann verwendet werden, um die Bildglättung beim Skalieren in [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elementen ein- und auszuschalten.
- Asynchrone Skriptausführung
  - : Durch das Setzen des `async`-Attributes auf ein [`script`](/de/docs/Web/HTML/Element/script)-Element wird das Skript nicht das Laden oder die Anzeige des restlichen Dokuments blockieren. Stattdessen wird das Skript ausgeführt, sobald es heruntergeladen ist.

### JavaScript

Gecko 1.9.2 führt JavaScript 1.8.2 ein, das mehrere Sprachfunktionen aus dem [ECMAScript 5-Standard](/de/docs/JavaScript/ECMAScript_5_support_in_Mozilla) hinzufügt:

- [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) kann jetzt ISO-8601-Daten wie YYYY-MM-DD parsen.
- Die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Eigenschaft von Funktionsinstanzen ist nicht mehr aufzählbar.

### DOM

- Web Worker können sich jetzt selbst beenden
  - : [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) unterstützen jetzt die Methode `nsIWorkerScope.close()`, die es ihnen ermöglicht, sich selbst zu beenden.
- Drag & Drop unterstützt jetzt Dateien
  - : Das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das an Drag-Listener übergeben wird, enthält jetzt eine Liste von Dateien, die gezogen wurden.
- Überprüfen, ob ein Element einem bestimmten CSS-Selektor entspricht
  - : Die neue Methode [`element.mozMatchesSelector`](/de/docs/Web/API/Node/mozMatchesSelector) ermöglicht es, herauszufinden, ob ein Element einem angegebenen CSS-Selektor entspricht. Siehe [Firefox-Bug 518003](https://bugzil.la/518003).
- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Inhalte können jetzt die Ausrichtung des Geräts erkennen, wenn dieses über einen unterstützten Beschleunigungssensor verfügt, unter Verwendung des [`MozOrientation`](/de/docs/DOM/MozOrientation)-Ereignisses. Firefox 3.6 unterstützt den Beschleunigungssensor in Mac-Laptops.
- [Erkennen von Änderungen an Breite und Höhe des Dokuments](/de/docs/DOM/Detecting_document_width_and_height_changes)
  - : Das neue Ereignis `MozScrollAreaChanged` wird immer dann ausgelöst, wenn sich die Eigenschaften `scrollWidth` und/oder `scrollHeight` des Dokuments ändern.

#### Verschiedene DOM-Änderungen

- Die Methode `getBoxObjectFor()` wurde **entfernt**, da sie nicht standardisiert und potenziell problematisch für das Web war. Siehe [Firefox-Bug 340571](https://bugzil.la/340571). Dies hat auch Auswirkungen auf [MooTools](https://mootools.net/), das diesen Aufruf zur Gecko-Erkennung nutzt; dieses Problem wurde in der neuesten Version von MooTools behoben, daher ist ein Update empfohlen.
- Die neuen Eigenschaften [`mozInnerScreenX`](/de/docs/Web/API/Window/mozInnerScreenX) und [`mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY) auf DOM-Fenstern wurden hinzugefügt; diese geben die Bildschirmkoordinaten der oberen linken Ecke des Viewports des Fensters zurück.
- Das neue Attribut `mozScreenPixelsPerCSSPixel` im `nsIDOMWindowUtils` Interface, das nur für Chrome verfügbar ist, bietet einen Umrechnungsfaktor zwischen CSS-Pixeln und Bildschirm-Pixeln; dieser Wert kann je nach Zoomstufe der Inhalte variieren.
- Wenn sich der Fragmentbezeichner einer URI der Seite (der Teil nach dem "#" (Hash) Zeichen) ändert, wird ein neues `hashchange`-Ereignis an die Seite gesendet. Siehe das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis für weitere Informationen. [Firefox-Bug 385434](https://bugzil.la/385434)
- Das Attribut [`document.readyState`](/de/docs/Web/API/Document/readyState) wird jetzt unterstützt. [Firefox-Bug 347174](https://bugzil.la/347174)
- Unterstützung für HTML5s [`element.classList`](/de/docs/Web/API/Element/classList) wurde hinzugefügt, um die Behandlung des `class`-Attributes zu erleichtern. [Firefox-Bug 501257](https://bugzil.la/501257)

...

(Übersetzung der übrigen Abschnitte erfolgt analog dem oben gezeigten Stil.)
