---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: 4607393c465f5a8bdbb36047f2ec03c2fb058af5
---

Der Wert **`text-scale`** für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements ermöglicht es, die Seite so einzustellen, dass das anfängliche {{cssxref("font-size")}} des {{htmlelement("html")}}-Root-Elements proportional zu den Text-Skala-Einstellungen des Betriebssystems und des Browsers skaliert wird.

> [!WARNING]
> Wenn Sie `<meta name="text-scale" content="scale" />` auf Ihrer Website einfügen, um dieses Textskalierungsverhalten zu aktivieren, müssen Sie testen, dass es Textgrößen bis zum maximalen Textskalierungsfaktor für Ihre Zielplattformen unterstützt. Dies reicht typischerweise von 200% bis über 300% auf mobilen Plattformen, wobei einige Barrierefreiheitsfunktionen noch größere Textskalierungen ermöglichen. Stellen Sie sicher, dass Ihre Website für Benutzer, die größere oder kleinere Schriftgrößeinstellungen im Betriebssystem voreinstellen, nicht fehlerhaft aussieht.

## Verwendungshinweise

Ein `<meta name="text-scale">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Gibt das {{cssxref("font-size")}} Skala Opt-in Verhalten an.
    Sein Wert ist ein Schlüsselwort, das eines der folgenden sein kann:
    - `scale`
      - : Aktiviert die anfängliche {{cssxref("font-size")}}-Skala des {{htmlelement("html")}}-Root-Elements proportional zu den Textskaleneinstellungen des Betriebssystems und des Browsers. Außerdem deaktiviert dies bestehende browserbasierte Mechanismen und Heuristiken (zum Beispiel Text-Autoskalierung auf mobilen Geräten).
    - `legacy`
      - : Der Standardwert. Die Seite wird nicht zur Roots-Unterskalierung der `font-size` in Bezug auf die Textskalierungseinstellungen von OS und Browser aktiviert. Dies hat denselben Effekt wie das Weglassen des `<meta>`-Elements (betriebssystembezogene Schriftpräferenzen werden ignoriert).

## Beschreibung

Das `<meta name="text-scale" content="scale" />`-Element kann im {{htmlelement("head")}} eines Dokuments aufgenommen werden, um dem Browser mitzuteilen, dass die Seite so dimensioniert ist, dass sie gut auf verschiedene, vom Benutzer ausgewählte Schriftgrößepräferenzen reagiert; es deaktiviert auch bestehende browserbasierte Mechanismen und Heuristiken.

Konkret definiert es den Wert der anfänglichen `font-size` des {{htmlelement("html")}}-Root-Elements, um proportional zu den benutzerdefinierten Schriftgrößeinstellungen von OS und Browser zu skalieren. Der {{cssxref("initial")}}-Wert der Root-{{cssxref("font-size")}} ist `medium`, welcher den Wert der [`rem`](/de/docs/Web/CSS/Reference/Values/length#rem)-Einheit definiert. Wenn Sie die Root-`font-size` auf einen [lokalen oder root-schriftrelativen `<length>`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths)-Einheit standardmäßig setzen oder setzen lassen, wird jedes nachfolgende Schlüsselwort (wie `medium`) oder jede schriftrelative Länge (wie `em` und `rem`) proportional zu den Schriftgrößeinstellungen von OS oder Browser skaliert.

Zum Beispiel würde mit `<meta name="text-scale" content="scale">` auf der Seite die folgende Regel:

```css
p {
  font-size: medium;
}
```

dazu führen, dass alle {{htmlelement("p")}}-Elemente eine skalierte Schriftgröße erhalten. Sie können die `font-size` auch auf `initial` setzen, um denselben Effekt zu erzielen.

Auf mobilen Plattformen ist dies standardmäßig nicht der Fall. `<meta name="text-scale" content="scale" />` ermöglicht diese Skalierung. Auf Desktop-Plattformen führt es dazu, dass die Umweltvariable [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale) den Multiplikator widerspiegelt, der den Browser-Schriftgrößeinstellungen entspricht, hat jedoch außer diesem keinen erkennbaren Vorteil.

### Zusammenfassung der Verwendung

Zusammengefasst: Setzen Sie `scale` nur, wenn Ihre App so konzipiert ist, dass sie Schriftgrößen skalieren unterstützt. Empfohlene Nutzung:

1. Fügen Sie `<meta name="text-scale" content="scale" />` im `<head>` Ihrer Seite ein.
2. Überschreiben Sie nicht die anfängliche {{cssxref(":root")}} `font-size` mit einem [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) (wie `16px`).
3. Verwenden Sie nur [schriftrelative Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font) wie `em`/`rem` oder Schlüsselwörter wie `small`, `x-large` usw., um Inhalte zu dimensionieren.

### `<meta name="text-scale">` versus `env(preferred-text-scale)`

Es wird empfohlen, `<meta name="text-scale" />` zu verwenden, um Dimensionen relativ zu den Textskaleneinstellungen des OS zu dimensionieren, statt der Umweltvariable [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale). Sie haben ähnliche Effekte auf mobilen Geräten, aber `<meta>` bietet auch Verbesserungen für Desktop-Browser (und ist einfacher zu verwenden).

Vermeiden Sie es, beide Funktionen gleichzeitig zu verwenden, da Textskalierung möglicherweise doppelt angewendet wird, wodurch kleine schriftrelative Dimensionen kleiner und große schriftrelative Dimensionen größer werden.

## Beispiele

### Meta-Viewport-Textskalierung Demonstration

Dieses Beispiel demonstriert den Effekt von `<meta name="text-scale" content="scale">`.

#### HTML

Wir fügen das `<meta name="text-scale" content="scale">`-Element im Dokument `<head>` ein, plus ein [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Element, um die korrekte Anzeige auf mobilen Geräten sicherzustellen. Wir fügen auch einige Textinhalte innerhalb von {{htmlelement("p")}}-Elementen hinzu, die unterschiedliche `class`-Attribute haben, damit wir sie mit verschiedenen Stilen ansprechen können.

```html live-sample___text-scale
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size obeys the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences, even with text-scale set.
      <div class="text-scale">But this font size does!</div>
    </p>
  </body>
</html>
```

```html hidden live-sample___no-text-scale
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size does not obey the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences.
      <div class="text-scale">Neither does this!</div>
    </p>
  </body>
</html>
```

#### CSS

Textcontainer mit einer `class` von `text-scale` erhalten eine {{cssxref("font-size")}} von `1rem`, was bedeutet, dass in Browsern, die `<meta name="text-scale" content="scale">` unterstützen, dieser Text skaliert wird, wenn die Schriftgröße des OS/Browser geändert wird. Textcontainer mit einer `class` von `fixed` erhalten eine `font-size` von `20px`, was bedeutet, dass dieser Text bei Änderungen der OS/Browser-Schriftgröße an einer festen Größe bleibt.

```css live-sample___text-scale live-sample___no-text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### Ergebnis

Diese Version hat das `<meta name="text-scale">`-Element enthalten:

{{embedlivesample("text-scale", "100%", "200")}}

Diese Version hat das `<meta name="text-scale">`-Element NICHT enthalten:

{{embedlivesample("no-text-scale", "100%", "200")}}

Testen Sie diese Beispiele in einem mobilen Browser. Ändern Sie die bevorzugte Schriftgröße in den Anzeige- oder Barrierefreiheits-Einstellungen des mobilen Geräts. Beachten Sie, wie im ersten Beispiel, wenn `<meta name="text-scale">` enthalten ist, die oberste und unterste Zeile des Textes proportional zu den OS-Einstellungen skaliert wird, während die mittlere Zeile, mit der `font-size` basierend auf absoluten Einheiten eingestellt, die Größe nicht ändert. Ohne das `<meta name="text-scale">`-Element skaliert der Text nicht proportional zu den OS-Einstellungen.

Um das Testen zu erleichtern, können Sie beide Versionen im Vollbildmodus in einem separaten Tab mit den folgenden Links öffnen:

- {{ LiveSampleLink("text-scale", "Beispiel mit <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}
- {{ LiveSampleLink("no-text-scale", "Beispiel ohne <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}

### Ein textskalierungsresponsives Layout

Dieses Beispiel zeigt, dass mit `<meta name="text-scale">` auf einer Seite schriftrelative Größen innerhalb von {{cssxref("@media")}}-Abfragen verwendet werden können, um mobile Browser zu veranlassen, Haltepunkte automatisch anzupassen, wenn die OS-Schriftgröße geändert wird.

#### HTML

Wie im vorherigen Beispiel enthält unser Markup erneut die `<meta name="text-scale">` und `<meta name="viewport">`-Elemente im `<head>`. In diesem Demo enthält der Hauptinhalt zwei Elemente — {{htmlelement("main")}} und {{htmlelement("aside")}}, die eine Hauptinhaltsspalte und eine Seitenleiste darstellen.

```html live-sample___text-scale-layout
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>Main content</main>
    <aside>Aside content</aside>
  </body>
</html>
```

#### CSS

Standardmäßig werden der Hauptinhalt und die Seitenleiste untereinander angeordnet. Wir fügen eine {{cssxref("@media")}}-Abfrage ein, die die Elemente nebeneinander mit [CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout) anordnet, wenn das Ansichtsfenster breiter als `35rem` wird.

```css hidden live-sample___text-scale-layout
body {
  margin: 0;
}

main,
aside {
  background-color: silver;
  padding: 24px;
  font-size: 1.5rem;
}
```

```css live-sample___text-scale-layout
@media (width > 35rem) {
  body {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 18.75rem;
  }
}
```

#### Ergebnis

{{embedlivesample("text-scale-layout", "100%", "200")}}

Testen Sie dies in einem mobilen Browser. Sie werden sehen, dass sich beim Vergrößern der OS-Schriftgröße die Haltepunktgröße proportional dazu vergrößert. Bei größeren OS-Schriftgrößen beginnen der Haupt- und der Nebenteil, übereinander zu erscheinen, während sie zuvor nebeneinander erschienen. Sie müssen möglicherweise die Bildschirmansicht ändern, um den Effekt zu sehen.

Sie können die Demo in einem separaten Tab mit dem folgenden Link öffnen, um das Testen zu erleichtern:

{{ LiveSampleLink("text-scale-layout", "Beispiel für anpassbares Layout") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [[meta text-scale] Support für WebView](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) auf chromium.googlesource.com (2026)
