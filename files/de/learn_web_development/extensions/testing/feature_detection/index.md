---
title: Implementieren der Feature-Erkennung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature-Erkennung beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt und das Ausführen von unterschiedlichem Code, abhängig davon, ob er dies tut (oder nicht), damit der Browser stets eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehlermeldungen auszugeben. Dieser Artikel erläutert, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek nutzen, um die Implementierung zu beschleunigen, und native Funktionen für die Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        der übergeordneten
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testing</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Konzept der Feature-Erkennung zu verstehen und in der Lage zu sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test ausführen können, um festzustellen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die _das_ Feature unterstützen, als auch in Browsern, die _es nicht_ unterstützen, eine akzeptable Erfahrung zu bieten. Wenn Sie dies nicht tun, kann es passieren, dass Browser, die die von Ihnen im Code verwendeten Features nicht unterstützen, Ihre Seiten nicht richtig anzeigen oder vollständig versagen, was zu einer schlechten Benutzererfahrung führt.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die die verfügbaren Standortdaten für das Gerät, auf dem der Webbrowser ausgeführt wird, bereitstellt) hat den Haupteinstiegspunkt für ihre Verwendung, eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie mit folgendem Beispiel feststellen, ob der Browser Geolokalisierung unterstützt oder nicht:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines von Anfang an klarstellen — verwechseln Sie die Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schlechte Praxis, die unter allen Umständen vermieden werden sollte. Siehe [keine Browser-Sniffing](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#dont_browser_sniff) für mehr Details.

## Schreiben Ihrer eigenen Feature-Erkennungstests

In diesem Abschnitt betrachten wir die Implementierung eigener Feature-Erkennungstests, sowohl in CSS als auch in JavaScript.

### CSS

Sie können Tests für CSS-Features schreiben, indem Sie in JavaScript auf das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel könnte sein, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Verwenden wir dies als Beispiel: Wir könnten ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopfteil unserer HTML-Datei einbinden: eines für das gesamte Styling und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Unterstützung durch den Browser selektiv anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}} at-rule. Diese funktioniert in ähnlicher Weise wie [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass sie CSS selektiv je nach Unterstützung eines CSS-Features anwendet, ähnlich wie `CSS.supports()`.

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

Dieser at-rule-Block wendet die CSS-Regel nur an, wenn der aktuelle Browser die Deklaration `grid-template-columns: subgrid;` unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) und KEIN Semikolon am Ende einschließen.

`@supports` hat auch `AND`, `OR` und `NOT` Logik verfügbar — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist komfortabler als das vorherige Beispiel — wir können unsere gesamte Feature-Erkennung in CSS durchführen, ohne JavaScript zu benötigen, und wir können die gesamte Logik in einer einzigen CSS-Datei handhaben, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode zur Bestimmung der Browserunterstützung für CSS-Features.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests über eines von wenigen bekannten Mustern durchgeführt.

Häufige Muster für erkennbare Features umfassen:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt für die Verwendung der API oder eines anderen Features, das Sie erkennen) in ihrem übergeordneten `Object` existiert.

    Unser früheres Beispiel nutzte dieses Muster, um die [Geolocation](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Eigenschaft darauf existiert.

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
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert in einen "echten" booleschen Wert zu zwingen, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}}-Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird.

Bedenken Sie, dass einige Features jedoch als unerkennbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz wählen, wie z.B. die Verwendung eines {{Glossary("Polyfill", "Polyfill")}}.

#### matchMedia

Wir möchten an dieser Stelle auch auf das JavaScript-Feature [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) hinweisen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media-Query-Tests innerhalb von JavaScript auszuführen. Es sieht folgendermaßen aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel macht unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo davon Gebrauch, um die Brick JavaScript-Bibliothek selektiv anzuwenden und sie zur Handhabung des UI-Layouts zu nutzen, jedoch nur für das kleinbildschirmige Layout (480px Breite oder weniger). Wir verwenden zuerst das `media`-Attribut, um das Brick-CSS nur dann auf die Seite zu laden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` in JavaScript mehrmals, um die Brick-Navigationsfunktionen nur auszuführen, wenn wir uns im kleinbildschirmigen Layout befinden (in größeren Bildschirmlayouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in einem angemessenen Detailgrad, indem die Hauptkonzepte durchgegangen wurden und Ihnen gezeigt wurde, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als Nächstes werden wir uns mit automatisierten Tests befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
