---
title: "Firefox 158: Versionshinweise für Entwickler (Beta)"
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: d385d44658236ce148462b7ad6b681f0918427d4
---

Dieser Artikel informiert über die Änderungen in Firefox 158, die Entwickler betreffen.
Firefox 158 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentarmarkierungen bei allen Überschriften, für die Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

### Barrierefreiheit

- Das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) wird jetzt in Firefox für Android unterstützt (auf Desktop-Geräten ist die Unterstützung schon seit Langem verfügbar). Dieser ARIA-Status gibt an, ob ein Element gerade geändert wird. So können assistive Technologien warten, bis Änderungen am Inhalt abgeschlossen sind, bevor sie Benutzer über die Aktualisierung informieren. Ein Screenreader kann beispielsweise warten, bis die Aktualisierung einer [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) abgeschlossen ist, bevor er die Änderungen ansagt. ([Firefox-Bug 908042](https://bugzil.la/908042)).

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- [CSS-Arithmetik mit typisierten Werten](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) wird jetzt unterstützt. Damit können Funktionen wie {{cssxref("calc()")}} zwei Werte desselben Datentyps dividieren, selbst wenn sie unterschiedliche Einheiten verwenden. Die resultierenden einheitslosen Quotienten können anschließend in andere Datentypen umgewandelt werden, um nützliche Beziehungen zwischen verschiedenen Werten auf einer Seite herzustellen. ([Firefox-Bug 2067411](https://bugzil.la/2067411)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) wird jetzt unterstützt und gibt Statistiken zur zugrunde liegenden Verbindung des Transports und zu dessen Datagrammen zurück. ([Firefox-Bug 2007202](https://bugzil.la/2007202)).
- Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und der Methode [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) wird jetzt unterstützt. Diese Option gibt eine URL an, zu der navigiert wird, nachdem ein Benutzer auf die erzeugte Systembenachrichtigung geklickt hat. Nachdem eine Benachrichtigung erstellt wurde, können Sie die URL über die Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) abrufen. ([Firefox-Bug 2069920](https://bugzil.la/2069920)).
- Das WebGPU-Feature `float32-blendable` wird jetzt unterstützt (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Dadurch können [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte mit dem [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) `r32float`, `rg32float` oder `rgba32float` [geblendet](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) werden. ([Firefox-Bug 1931630](https://bugzil.la/1931630)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst jetzt bei Übergabe eines ungültigen Hostnamens einen Fehler aus, statt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt und gibt die im Manifest deklarierte Version der Erweiterung zurück. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`corner-shape`-Eigenschaften**: `layout.css.corner-shape.enabled`

  Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen Langschreibweisen werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie Eckenformen mithilfe eines der Schlüsselwortwerte von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
  ([Firefox-Bug 2070927](https://bugzil.la/2070927)).

- **Spracherkennung auf dem Gerät**: `media.webspeech.recognition.enable`

  [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) wird jetzt in Nightly unterstützt, allerdings nur auf Desktop-Geräten. Damit können Sie die Spracherkennung über die [Web Speech API](/de/docs/Web/API/Web_Speech_API) direkt im Browser durchführen, statt einen Cloud-Dienst zu verwenden.
  ([Firefox-Bug 2069803](https://bugzil.la/2069803)).
