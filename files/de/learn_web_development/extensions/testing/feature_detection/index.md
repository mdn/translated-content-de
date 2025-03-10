---
title: Implementierung von Feature-Erkennung
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Die Feature-Erkennung beinhaltet, herauszufinden, ob ein Browser einen bestimmten Codeblock unterstützt, und führt je nach Ergebnis unterschiedlichen Code aus, sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehlermeldungen zu erzeugen. Dieser Artikel erläutert, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und die nativen Funktionen zur Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">grundlegenden Prinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was das Konzept der Feature-Erkennung ist, und in der Lage zu sein, geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um zu bestimmen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die das Feature _unterstützen_, als auch in Browsern, die es _nicht unterstützen_, eine akzeptable Erfahrung zu bieten. Wenn Sie dies nicht tun, könnte es passieren, dass Browser, die die von Ihnen verwendeten Features nicht unterstützen, Ihre Seiten nicht richtig anzeigen oder komplett ausfallen, was eine schlechte Benutzererfahrung schafft.

Lassen Sie uns rekapitulieren und uns das Beispiel ansehen, das wir in unserem [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) behandelt haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die die Standortdaten des Geräts, auf dem der Webbrowser läuft, zugänglich macht), hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir weitermachen, möchten wir eine Sache vorweg sagen — verwechseln Sie die Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Siehe [don't browser sniff](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#dont_browser_sniff) für mehr Details.

## Eigene Feature-Erkennungstests schreiben

In diesem Abschnitt werden wir uns ansehen, wie Sie Ihre eigenen Feature-Erkennungstests sowohl in CSS als auch in JavaScript implementieren können.

### CSS

Sie können Tests für CSS-Features schreiben, indem Sie in JavaScript die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel könnte sein, die Unterstützung von [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Raster verwenden, das gut funktioniert, aber nicht so cool aussieht.

Als Beispiel könnten wir ein Subgrid-Stylesheet einfügen, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unserer HTML-Datei einbinden: eines für das gesamte Styling und eines, das das Standard-Layout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir abhängig von den Unterstützungsstufen selektiv auf Browser anwenden wollen.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres konditionellen Stylesheets basierend auf der Unterstützung im Browser.

Wir können ein `<script></script>` in unser Dokument einfügen, gefüllt mit dem folgenden JavaScript:

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}}-Regel. Diese funktioniert ähnlich wie [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass sie nicht selektiv CSS je nach einer Media-Eigenschaft wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Seitenverhältnis")}} anwendet, sondern selektiv CSS abhängig davon anwendet, ob ein CSS-Feature unterstützt wird, ähnlich wie `CSS.supports()`.

Zum Beispiel könnten wir unser vorheriges Beispiel umschreiben, um `@supports` zu verwenden:

```css
@supports (grid-template-columns: subgrid) {
  main {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, minmax(100px, auto));
  }

  .item {
    display: grid;
    grid-column: 2 / 7;
    grid-row: 2 / 4;
    grid-template-columns: subgrid;
    grid-template-rows: repeat(3, 80px);
  }

  .subitem {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
  }
}
```

Dieser Regelblock wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einfügen und am Ende KEIN Semikolon hinzufügen.

`@supports` bietet auch `AND`, `OR` und `NOT`-Logik — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können unsere gesamte Feature-Erkennung in CSS durchführen, kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei behandeln, was die Anzahl der HTTP-Anfragen reduziert. Aus diesem Grund ist dies die bevorzugte Methode, um die Unterstützung für CSS-Features im Browser zu bestimmen.

### JavaScript

Wir haben zuvor ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests nach einem der wenigen gängigen Muster durchgeführt.

Gängige Muster für erkennbare Features umfassen:

- Mitglieder eines Objekts

  - : Prüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt zur Nutzung der API oder eines anderen Features, das Sie erkennen möchten) in ihrem übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die Unterstützung der [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung der [Canvas API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert in einen "richtigen" booleschen Wert zu zwingen, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert, und prüfen Sie dann, ob der Wert beibehalten wird.

Bedenken Sie, dass jedoch einige Features als nicht erkennbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie z.B. die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen erlaubt, Media-Query-Tests innerhalb von JavaScript durchzuführen. Es sieht so aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Ein Beispiel: Unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo nutzt dies, um selektiv die Brick JavaScript-Bibliothek anzuwenden und sie für das UI-Layout zu verwenden, aber nur für das Layout des kleinen Bildschirms (480px breit oder weniger). Zuerst verwenden wir das `media` Attribut, um das Brick CSS nur auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Dann verwenden wir `matchMedia()` mehrmals im JavaScript, um die Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in breiteren Bildschirm-Layouts kann alles auf einmal gesehen werden, sodass wir nicht zwischen verschiedenen Ansichten navigieren müssen).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in einem angemessenen Detailgrad, ging durch die Hauptkonzepte und zeigte Ihnen, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als nächstes werden wir uns mit automatisierten Tests befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
