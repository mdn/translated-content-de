---
title: Versionshinweise für Entwickler zu Firefox 159 (Stable)
short-title: Firefox 159 (Stable)
slug: Mozilla/Firefox/Releases/159
l10n:
  sourceCommit: 9126ecf140009f571300b0d083148eb31e826128
---

Dieser Artikel informiert über Änderungen in Firefox 159, die für Entwickler relevant sind.
Firefox 159 wurde am [27. Oktober 2026](https://whattrainisitnow.com/release/?version=159) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- [Scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sind jetzt standardmäßig aktiviert. Mit ihnen können Sie Eigenschaftswerte entlang einer scrollbasierten Zeitleiste animieren (also durch Scrollen eines Scroll-Containers), statt entlang der standardmäßigen zeitbasierten Zeitleiste des Dokuments.
  ([Firefox-Bug 1324602](https://bugzil.la/1324602)).

#### Entfernungen

- Die ältere Syntax für das Masonry-Layout wurde entfernt: der Wert `masonry` der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sowie die Eigenschaft `masonry-auto-flow`. Diese Syntax war nur in Nightly standardmäßig aktiviert, gesteuert durch die Einstellung `layout.css.grid-template-masonry-value.enabled`. Sie wurde durch das [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) abgelöst, das die Werte `grid-lanes` und `inline-grid-lanes` der Eigenschaft {{cssxref("display")}} verwendet. ([Firefox-Bug 2077170](https://bugzil.la/2077170)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- Methoden, die HTML mit der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bereinigen, etwa [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), entfernen unerwünschte Elemente und Attribute jetzt bereits beim Parsen des Markups. Zuvor wurde zunächst das gesamte Markup geparst und anschließend der entstandene DOM-Baum bereinigt. Das Ergebnis ist dasselbe, mit einer Ausnahme: Benachbarter Text befindet sich jetzt in einem einzigen Textknoten, statt auf mehrere verteilt zu sein. ([Firefox-Bug 2070498](https://bugzil.la/2070498)).
- Die [WebGL](/de/docs/Web/API/WebGL_API)-Erweiterung [`EXT_clip_control`](/de/docs/Web/API/EXT_clip_control) ist jetzt auf Geräten verfügbar, deren Grafiktreiber sie unterstützt. Ihre Methode [`clipControlEXT()`](/de/docs/Web/API/EXT_clip_control/clipControlEXT) ändert, wie Clip-Space-Koordinaten auf Fensterkoordinaten abgebildet werden: Sie kann den Clip-Ursprung in die obere linke Ecke verschieben und den Tiefenbereich in normalisierten Gerätekoordinaten von 0 bis 1 statt standardmäßig von -1 bis 1 festlegen. Das entspricht den Konventionen von Direct3D und WebGPU. Der Tiefenbereich von 0 bis 1 macht außerdem die Reversed-Z-Technik wirksam, die bei einem Gleitkomma-Tiefenpuffer die Tiefenpräzision verbessert. ([Firefox-Bug 1885031](https://bugzil.la/1885031)).
- Die [WebGL](/de/docs/Web/API/WebGL_API)-Erweiterung [`EXT_texture_mirror_clamp_to_edge`](/de/docs/Web/API/EXT_texture_mirror_clamp_to_edge) ist jetzt auf Geräten verfügbar, deren Grafiktreiber sie unterstützt. Sie fügt den Textur-Wrapping-Modus `MIRROR_CLAMP_TO_EDGE_EXT` hinzu: Bei Texturkoordinaten von -1 bis 0 wird ein Spiegelbild der Textur abgetastet; Koordinaten unter -1 oder über 1 werden auf deren Rand begrenzt. So lässt sich ein symmetrisches Bild, beispielsweise ein Leuchteffekt, in einer Textur speichern, die nur eine Hälfte des Bildes enthält. ([Firefox-Bug 1908749](https://bugzil.la/1908749)).
- Die [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext)-Erweiterung [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16) ist jetzt standardmäßig auf Geräten aktiviert, deren Grafiktreiber normalisierte 16-Bit-Formate unterstützt. Sie fügt normalisierte 16-Bit-Formate für Texturen und Renderbuffer hinzu. Damit lassen sich Daten wie Höhenkarten und medizinische Bilder präziser speichern als mit 8-Bit-Formaten. ([Firefox-Bug 1735401](https://bugzil.la/1735401)).
- [`GPUDevice.limits`](/de/docs/Web/API/GPUDevice/limits) gibt jetzt die angepassten Werte der Limits `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` zurück. Beim Erstellen eines Geräts werden diese Limits auf die Werte von `maxStorageBuffersPerShaderStage` und `maxStorageTexturesPerShaderStage` gesetzt. Zuvor gab `GPUDevice.limits` stattdessen die angeforderten Werte zurück.
  ([Firefox-Bug 2006720](https://bugzil.la/2006720)).

#### DOM

- [Bereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. Dadurch kann ein Shadow-Baum eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) erstellen, deren Definitionen nur für diesen bestimmten DOM-Teilbaum gelten. So lassen sich Namenskollisionen vermeiden, wenn mehrere Web Components Elemente mit demselben Namen deklarieren. Die Eigenschaft `customElementRegistry` kann für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verwendet werden. Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt für die bereichsgebundene Verwendung. ([Firefox-Bug 2070506](https://bugzil.la/2070506))

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Empfohlene Einstellungen werden jetzt als Standardwerte statt als Benutzerwerte festgelegt. Dadurch bleiben sie nach einem unsauberen Herunterfahren nicht mehr in `prefs.js` erhalten. ([Firefox-Bug 2074275](https://bugzil.la/2074275)).
- Das Kommandozeilenargument `--remote-allow-system-access` wurde entfernt. Um den Systemzugriff zu aktivieren, setzen Sie stattdessen die Umgebungsvariable `MOZ_REMOTE_ALLOW_SYSTEM_ACCESS` auf `1`. ([Firefox-Bug 2054896](https://bugzil.la/2054896)).
- Ein Speicherleck wurde behoben, bei dem interne Polling-Vorgänge nach einem Timeout mit Fehler bis zum Herunterfahren weiterliefen. Dies konnte verschiedene Befehle betreffen, beispielsweise `browsingContext.traverseHistory` von WebDriver BiDi. ([Firefox-Bug 2079758](https://bugzil.la/2079758)).

#### WebDriver BiDi

- Der Befehl `emulation.setMediaFeaturesOverride` wurde implementiert. Damit können Clients die Werte von CSS-Medienmerkmalen überschreiben. Derzeit wird nur [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) unterstützt. ([Firefox-Bug 2064354](https://bugzil.la/2064354)).
- Für die Firefox-spezifischen Erweiterungen von WebDriver BiDi wurde eine [maschinenlesbare CDDL-Datei (Concise Data Definition Language)](https://searchfox.org/firefox-main/rev/2d5c2a4eb5d99a92249ec13370b1de9c1a77c0f8/remote/webdriver-bidi/cddl/Fields.cddl) hinzugefügt. ([Firefox-Bug 2057588](https://bugzil.la/2057588)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 159 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Numerische CSS-Factory-Funktionen in Workern und Worklets verfügbar**: `layout.css.namespace.exposed-in-workers-and-worklets`

  Die [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) des Namensraums [`CSS`](/de/docs/Web/API/CSS), etwa `CSS.px()`, sind jetzt auch in Workern und Paint-Worklets verfügbar, nicht nur auf `Window`. Sie sind Teil der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API). Daher muss außerhalb von Nightly zusätzlich die Einstellung `layout.css.typed-om.enabled` auf `true` gesetzt sein. ([Firefox-Bug 2079188](https://bugzil.la/2079188)).

- **Neue Eigenschaften von `MathMLAnchorElement`**: `mathml.a.element.enabled`

  Die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) unterstützt jetzt die Eigenschaften [`download`](/de/docs/Web/API/MathMLAnchorElement/download), [`ping`](/de/docs/Web/API/MathMLAnchorElement/ping), [`rel`](/de/docs/Web/API/MathMLAnchorElement/rel), [`relList`](/de/docs/Web/API/MathMLAnchorElement/relList) und [`referrerPolicy`](/de/docs/Web/API/MathMLAnchorElement/referrerPolicy). ([Firefox-Bug 2064612](https://bugzil.la/2064612)).
