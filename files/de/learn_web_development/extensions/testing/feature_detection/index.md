---
title: Implementieren von Feature-Detection
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: da9123f0820286a9a87c8ca33447e7c5e5a20320
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature-Detection beinhaltet das Ermitteln, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen von unterschiedlichem Code, je nachdem, ob er es tut (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bietet, anstatt in einigen Browsern abzustürzen/Fehler anzuzeigen. Dieser Artikel erläutert, wie Sie Ihre eigene einfache Feature-Detection schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung nutzen und native Funktionen zur Feature-Detection wie `@supports` einsetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Idee
        der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was das Konzept der Feature-Detection ist, und in der Lage zu sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Detection

Die Idee hinter Feature-Detection ist, dass Sie einen Test durchführen können, um festzustellen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die das Feature _unterstützen_, als auch in Browsern, die es _nicht unterstützen_, eine akzeptable Erfahrung zu bieten. Wenn Sie dies nicht tun, könnten Browser, die die in Ihrem Code verwendeten Features nicht unterstützen, Ihre Websites nicht richtig anzeigen oder sogar ganz versagen, was eine schlechte Benutzererfahrung schafft.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel über [JavaScript-Debugging und Fehlermanagement](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben — die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat als Haupteinstiegspunkt eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas Ähnliches wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir weitermachen, möchten wir eine Sache vorweg sagen — verwechseln Sie Feature-Detection nicht mit dem **Browser-Sniffing** (Erkennen, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Siehe [Browsererkennung mit der User-Agent-Zeichenfolge (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für weitere Details.

## Eigene Feature-Detection-Tests schreiben

In diesem Abschnitt betrachten wir die Implementierung eigener Feature-Detection-Tests, sowohl in CSS als auch in JavaScript.

### CSS

Sie können Tests für CSS-Features schreiben, indem Sie in JavaScript die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel könnte sein, die Unterstützung von [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Mit diesem Beispiel könnten wir ein Subgrid-Stylesheet einfügen, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unserer HTML-Datei einfügen: eines für die gesamte Gestaltung und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Unterstützungslevel selektiv auf Browser anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheet basierend auf der Browserunterstützung.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, das mit folgendem JavaScript gefüllt ist:

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Detection: die {{cssxref("@supports")}} At-Regel. Diese Funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), nur dass anstatt selektiv CSS je nach einer Medieneigenschaft wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Seitenverhältnis")}} anzuwenden, CSS je nach Unterstützung eines CSS-Features selektiv angewendet wird, ähnlich wie `CSS.supports()`.

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

Dieser At-Regel-Block wendet die CSS-Regel innerhalb nur an, wenn der aktuelle Browser die `grid-template-columns: subgrid;` Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und KEIN Semikolon am Ende einfügen.

`@supports` hat auch `AND`, `OR` und `NOT` Logik zur Verfügung — der andere Block setzt das reguläre Grid-Layout um, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können die gesamte Feature-Detection in CSS durchführen, es ist kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei handhaben, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, um die Unterstützung von CSS-Features durch den Browser zu bestimmen.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Feature-Detection-Test gesehen. Im Allgemeinen werden solche Tests durch eines von wenigen üblichen Mustern durchgeführt.

Gängige Muster für erkennbare Features sind:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Nutzung der API oder eines anderen Features, das Sie erkennen) im übergeordneten `Object` existiert.

    Unser vorheriges Beispiel verwendete dieses Muster, um die Unterstützung von [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie, ob eine Eigenschaft darauf existiert.

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
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert zu einem "richtigen" Booleschen Wert zu zwingen, anstatt zu einem {{Glossary("Truthy", "Truthigen")}}/{{Glossary("Falsy", "Falschen")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Wenn dies der Fall ist, überprüfen Sie, welchen Wert es zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und überprüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Features jedoch bekanntermaßen nicht erkennbar sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie z. B. die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir möchten an dieser Stelle auch das JavaScript-Feature [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media-Query-Tests innerhalb von JavaScript auszuführen. Es sieht so aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo dies, um die Brick-JavaScript-Bibliothek selektiv anzuwenden und sie zu verwenden, um das UI-Layout zu handhaben, aber nur für das kleine Bildschirm-Layout (480px breit oder weniger). Wir verwenden zuerst das `media`-Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden `matchMedia()` dann mehrfach im JavaScript, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (bei Layouts für breitere Bildschirme kann alles auf einmal gesehen werden, also müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte Feature-Detection in einem angemessenen Detailgrad, indem die Hauptkonzepte durchgegangen und gezeigt wurde, wie Sie Ihre eigenen Feature-Detection-Tests implementieren können.

Als Nächstes schauen wir uns automatisiertes Testen an.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
