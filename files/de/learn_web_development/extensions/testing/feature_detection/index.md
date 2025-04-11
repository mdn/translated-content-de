---
title: Implementieren von Feature-Detection
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature-Detection umfasst die Ermittlung, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen unterschiedlicher Codes abhängig davon, ob er dies tut (oder nicht), damit der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Detection schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen für die Feature-Detection wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        der übergeordneten
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundlagen des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was das Konzept der Feature-Detection ist, und in der Lage sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Detection

Die Idee hinter der Feature-Detection besteht darin, dass Sie einen Test durchführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code auszuführen, um sowohl in Browsern, die die Funktion _unterstützen_, als auch in solchen, die sie _nicht unterstützen_, eine akzeptable Erfahrung zu bieten. Wenn Sie dies nicht tun, können Browser, die die Funktionen, die Sie in Ihrem Code verwenden, nicht unterstützen, Ihre Seiten möglicherweise nicht richtig anzeigen oder sogar ganz ausfallen, was zu einer schlechten Benutzererfahrung führt.

Lassen Sie uns recapitulieren und das Beispiel betrachten, das wir in unserem [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) Artikel angesprochen haben – die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser ausgeführt wird) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas wie das folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines vorweg klären — verwechseln Sie Feature-Detection nicht mit dem **Erkennen von Browsern** (Erkennen, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die unbedingt vermieden werden sollte. Weitere Details finden Sie unter [Browsererkennung mithilfe der User-Agent-Zeichenfolge (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

## Eigene Feature-Detection-Tests schreiben

In diesem Abschnitt werden wir uns mit der Implementierung Ihrer eigenen Feature-Detection-Tests sowohl in CSS als auch in JavaScript befassen.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie im JavaScript nach der Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) prüfen.

Ein klassisches Beispiel könnte darin bestehen, die Unterstützung von [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Unter Verwendung dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopfbereich unserer HTML-Datei einfügen: eines für die gesamte Gestaltung und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` alle Stile, die wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir abhängig von den Unterstützungsstufen selektiv auf Browser anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen und dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung zu aktualisieren.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingung testen wir, ob die Eigenschaft {{cssxref("grid-template-columns")}} den Wert `subgrid` unterstützt, indem wir [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) verwenden.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Detection: die {{cssxref("@supports")}} At-Regel. Diese funktioniert ähnlich wie [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries), außer dass sie CSS selektiv je nach Unterstützung einer CSS-Eigenschaft anwendet, ähnlich wie `CSS.supports()`.

Zum Beispiel könnten wir unser vorheriges Beispiel neu schreiben, um `@supports` zu verwenden:

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

Dieser At-Regel-Block wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die Deklaration `grid-template-columns: subgrid;` unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur den Eigenschaftsnamen) einschließen und KEIN Semikolon am Ende einschließen.

`@supports` hat auch `AND`, `OR` und `NOT` Logik — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können alle unsere Feature-Detection in CSS durchführen, kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzelnen CSS-Datei handhaben, was HTTP-Anfragen reduziert. Aus diesem Grund ist es die bevorzugte Methode, um die Browserunterstützung für CSS-Funktionen zu bestimmen.

### JavaScript

Wir haben bereits ein Beispiel für einen JavaScript-Feature-Detection-Test gesehen. Im Allgemeinen werden solche Tests über eines von wenigen gängigen Mustern durchgeführt.

Gängige Muster für erkennbare Funktionen umfassen:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt zur Nutzung der API oder einer anderen Funktion, die Sie erkennen) in ihrem übergeordneten `Object` existiert.

    Unser vorheriges Beispiel verwendete dieses Muster, um die Unterstützung für [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

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
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert in einen "richtigen" booleschen Wert zu zwingen, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verzerren könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Funktionen jedoch bekanntermaßen nicht erkennbar sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, z.B. die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir wollten auch die JavaScript-Eigenschaft [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) an diesem Punkt erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media-Query-Tests innerhalb von JavaScript auszuführen. Es sieht so aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unsere [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo diese Funktion, um die Brick JavaScript-Bibliothek selektiv anzuwenden und sie zur Verwaltung des UI-Layouts zu verwenden, jedoch nur für das kleine Bildschirmlayout (480px Breite oder weniger). Wir verwenden zuerst das `media`-Attribut, um das Brick CSS nur auf der Seite zu verwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Dann verwenden wir `matchMedia()` mehrmals im JavaScript, um die Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirmlayout befinden (in breiteren Bildschirmlayouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte Feature-Detection in einem vernünftigen Detail, wobei die Hauptkonzepte durchgegangen und gezeigt wurde, wie Sie Ihre eigenen Feature-Detection-Tests implementieren können.

Als nächstes werden wir uns mit automatisiertem Testing befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
