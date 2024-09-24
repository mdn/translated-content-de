---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 81c67156fef5fb82c439c8f0d8ce6d4dee86a3e3
---

{{CSSRef}}

Die **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um festzustellen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat.
Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. Licht- oder Dunkelmodus) oder eine Benutzereinstellung an.

## Eingebettete Elemente

Für SVG und iframes ermöglicht `prefers-color-scheme` es, einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des übergeordneten Elements der Webseite festzulegen.
SVGs müssen eingebettet verwendet werden (z. B. `<img src="circle.svg" alt="Kreis" />`) und nicht [in HTML eingebettet](/de/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>`- und `<iframe>`-Elementen erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host als der referenzierenden Seite abgerufen werden.
Um mehr über SVGs zu erfahren, sehen Sie sich die [SVG-Dokumentation](/de/docs/Web/SVG) an und für weitere Informationen über iframes, sehen Sie sich die [iframe-Dokumentation](/de/docs/Web/HTML/Element/iframe) an.

## Syntax

- `light`
  - : Gibt an, dass der Benutzer angegeben hat, dass er eine Oberfläche mit einem hellen Thema bevorzugt, oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer angegeben hat, dass er eine Oberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennung eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu verwenden, um die Farben auf eine dunklere Variante zu ändern. Es ist auch möglich, dies umgekehrt zu tun.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann aber auf dunkle Farben überschrieben werden. Thema B verwendet dunkle Farben, kann aber auf helle Farben überschrieben werden. Schließlich werden, wenn der Browser `prefers-color-scheme` unterstützt, beide Themen hell oder dunkel sein.

#### HTML

```html
<div class="box theme-a">Thema A (initial)</div>
<div class="box theme-a adaptive">Thema A (geändert, wenn Dunkel gewünscht)</div>
<br />

<div class="box theme-b">Thema B (initial)</div>
<div class="box theme-b adaptive">Thema B (geändert, wenn Hell gewünscht)</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber basierend auf der Media-Query zu einem dunklen Schema:

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber basierend auf der Media-Query zu einem hellen Schema:

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted #000;
  }
}
```

#### Ergebnis

Die linken Kästchen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Media-Query erscheinen würden. Die rechten Kästchen zeigen die gleichen Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Die Umrandung eines Kästchens wird gestrichelt oder gepunktet, wenn es basierend auf den Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie das `prefers-color-scheme` Media-Feature in einem eingebetteten Element verwendet wird, um ein Farbschema von einem übergeordneten Element zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und deren `alt`-Attribute festzulegen. Dies würde normalerweise im HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, von denen einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` des Betriebssystems und kann über den Theme-Switcher des Systems umgeschaltet werden.

Die zweiten und dritten Kreise erben das `color-scheme` vom einbettenden Element; die `@media` Abfrage erlaubt es, die Styles des SVG Inhalts basierend auf dem `color-scheme` des Elternelements festzulegen.
In diesem Fall ist das Elternelement mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

```html
<div>
  <img />
</div>

<div style="color-scheme: light">
  <img />
</div>
<div style="color-scheme: dark">
  <img />
</div>

<!-- Ein SVG für alle <img>-Elemente einbinden -->
<script>
  for (let img of document.querySelectorAll("img")) {
    img.alt = "circle";
    img.src =
      "data:image/svg+xml;base64," +
      window.btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <style>
          :root { color: blue }
          @media (prefers-color-scheme: dark) {
            :root { color: purple }
          }
        </style>
        <circle fill="currentColor" cx="16" cy="16" r="16"/>
      </svg>
    `);
  }
</script>
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} CSS Eigenschaft
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [Benutzeragent Client Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) (Firefox Seiteninspektor > Untersuchen und Bearbeiten von CSS)
- [Video-Tutorial: Ein Dunkelmodus für Ihre Website kodieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Neugestaltung Ihres Produkts und Ihrer Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Änderung von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
