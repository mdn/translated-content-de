---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. heller oder dunkler Modus) oder eine Benutzeragenten-Einstellung an.

## Eingebettete Elemente

Für SVG und iframes ermöglicht `prefers-color-scheme` es Ihnen, einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des übergeordneten Elements auf der Webseite festzulegen. SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) im Gegensatz zu [im HTML eingebettet](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_In_HTML_Introduction#basic_example). Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Vererbtes Farbdesign in eingebetteten Elementen"](#vererbtes_farbdesign_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-origin Elemente sind Elemente, die von einem anderen Host als die referenzierende Seite abgerufen werden. Um mehr über SVGs zu erfahren, sehen Sie sich die [SVG-Dokumentation](/de/docs/Web/SVG) an und für weitere Informationen über iframes, sehen Sie sich die [iframe-Dokumentation](/de/docs/Web/HTML/Element/iframe) an.

## Syntax

- `light`
  - : Gibt an, dass der Benutzer angegeben hat, dass er ein Interface bevorzugt, das ein helles Thema hat, oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer angegeben hat, dass er ein Interface bevorzugt, das ein dunkles Thema hat.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu nutzen, um die Farben in eine dunklere Variante zu ändern. Es ist auch möglich, es umgekehrt zu machen.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann aber auf dunkle Farben geändert werden. Thema B verwendet dunkle Farben, kann aber auf helle Farben geändert werden. Letztendlich, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themen hell oder dunkel sein.

#### HTML

```html
<div class="box theme-a">Theme A (initial)</div>
<div class="box theme-a adaptive">Theme A (changed if dark preferred)</div>
<br />

<div class="box theme-b">Theme B (initial)</div>
<div class="box theme-b adaptive">Theme B (changed if light preferred)</div>
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

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wird jedoch basierend auf der Medienabfrage in ein dunkles Schema geändert:

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

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wird jedoch basierend auf der Medienabfrage in ein helles Schema geändert:

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

Die linken Boxen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Medienabfrage erscheinen würden. Die rechten Boxen zeigen dieselben Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Der Rahmen einer Box wird gestrichelt oder gepunktet, wenn er basierend auf den Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Vererbtes Farbdesign in eingebetteten Elementen

Das folgende Beispiel zeigt, wie das `prefers-color-scheme` Media-Feature in einem eingebetteten Element verwendet wird, um ein Farbdesign von einem übergeordneten Element zu erben. Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und deren `alt`-Attribute festzulegen. Dies würde normalerweise im HTML als `<img src="circle.svg" alt="circle" />` erfolgen.

Sie sollten drei Kreise sehen, von denen einer in einer anderen Farbe gezeichnet ist. Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Theme-Umschalter des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media` Abfrage ermöglicht es, Stile des SVG-Inhalts basierend auf dem `color-scheme` des übergeordneten Elements festzulegen. In diesem Fall ist das übergeordnete Element mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

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

<!-- Embed an SVG for all <img> elements -->
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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} Eigenschaft
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Element/meta/name#color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Dunkelmodus für Ihre Website codieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Ihr Produkt und Ihre Webseite für den Dunkelmodus neu gestalten](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbdesigns in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
