---
title: Implementierung von Feature-Erkennung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature-Erkennung beinhaltet das Feststellen, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen eines unterschiedlichen Codes, je nachdem, ob er dies tut (oder nicht), sodass der Browser immer ein funktionierendes Erlebnis bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu verursachen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek verwenden, um die Implementierung zu beschleunigen, und native Funktionen für die Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den übergeordneten
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, was das Konzept der Feature-Erkennung ist, und in der Lage zu sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob ein Feature im aktuellen Browser unterstützt wird, und dann Code bedingt ausführen, um ein akzeptables Erlebnis sowohl in Browsern zu bieten, die das Feature _unterstützen_, als auch in Browsern, die es _nicht unterstützen_. Wenn Sie dies nicht tun, könnten Browser, die die von Ihnen verwendeten Features nicht unterstützen, Ihre Websites möglicherweise nicht richtig anzeigen oder ganz ausfallen, was zu einem schlechten Benutzererlebnis führt.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel [Umgehen häufiger JavaScript-Probleme](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angeschnitten haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Verwendung, eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eine Sache im Voraus sagen — verwechseln Sie Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schlechte Praxis, die unter allen Umständen zu vermeiden ist. Siehe [don't browser sniff](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#dont_browser_sniff) für weitere Details.

## Schreiben Ihrer eigenen Feature-Erkennungstests

In diesem Abschnitt schauen wir uns an, wie Sie Ihre eigenen Feature-Erkennungstests sowohl in CSS als auch in JavaScript implementieren.

### CSS

Sie können Tests für CSS-Features schreiben, indem Sie die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) in JavaScript testen.

Ein klassisches Beispiel könnte sein, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Anhand dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unseres HTML-Dokuments einfügen: eines für die gesamte Gestaltung und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hierbei kümmert sich `basic-styling.css` um alle Stilgestaltungen, die wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir selektiv auf Browser abhängig von ihren Unterstützungsniveaus anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browser-Unterstützung.

Wir können ein `<script></script>` in unser Dokument einfügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}}-At-Regel. Diese funktioniert auf ähnliche Weise wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass statt selektivem Anwenden von CSS je nach Medienfeature wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Seitenverhältnis")}}, CSS je nach Unterstützung eines CSS-Features selektiv angewendet wird, ähnlich wie bei `CSS.supports()`.

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

Dieser At-Regelblock wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Für eine Bedingung mit einem Wert müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und KEIN Semikolon am Ende einfügen.

`@supports` hat auch `AND`, `OR` und `NOT` Logik verfügbar — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können unsere gesamte Feature-Erkennung in CSS durchführen, ohne JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei handhaben, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, um die Browser-Unterstützung für CSS-Features zu bestimmen.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests mit einem von wenigen gemeinsamen Mustern durchgeführt.

Häufige Muster für erkennbare Features umfassen:

- Mitglieder eines Objekts

  - : Überprüfen, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die API oder ein anderes Feature, das Sie erkennen) im übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die Unterstützung für [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung für die [Canvas API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Die doppelte `NOT` in dem obigen Beispiel (`!!`) ist eine Methode, um einen Rückgabewert in einen "echten" booleschen Wert zu zwingen, anstatt in einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode an einem Element

  - : Erstellen Sie ein Element im Speicher mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Wenn ja, überprüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswertes durch ein Element

  - : Erstellen Sie ein Element im Speicher mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und überprüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Features jedoch als nicht erkennbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir wollten an dieser Stelle auch das JavaScript-Feature [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media Query-Tests innerhalb von JavaScript auszuführen. Es sieht folgendermaßen aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot)-Demo dies, um selektiv die Brick-JavaScript-Bibliothek anzuwenden und diese zu verwenden, um das UI-Layout zu handhaben, jedoch nur für das kleine Bildschirm-Layout (480px Breite oder weniger). Zuerst verwenden wir das `media`-Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Dann verwenden wir `matchMedia()` mehrmals im JavaScript, um Brick-Navigationsfunktionen nur auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in breiteren Bildschirm-Layouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in einem angemessenen Detailgrad, indem er die Hauptkonzepte durchging und Ihnen zeigte, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als nächstes werden wir uns dem automatisierten Testen zuwenden.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
