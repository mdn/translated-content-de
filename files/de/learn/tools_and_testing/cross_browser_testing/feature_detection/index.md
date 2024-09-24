---
title: Implementierung von Funktionsdetektion
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

Funktionsdetektion beinhaltet das Ermitteln, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen unterschiedlicher Codes, je nachdem, ob er dies tut (oder nicht), sodass der Browser stets eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu verursachen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Funktionsdetektion schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Funktionsdetektion wie `@supports` nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachelementen von <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Idee
        von den grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des browserübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Konzept der Funktionsdetektion zu verstehen und in der Lage zu sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Funktionsdetektion

Die Idee hinter der Funktionsdetektion ist, dass Sie einen Test durchführen können, um zu bestimmen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um in Browsern, die die Funktion _unterstützen_, und in Browsern, die sie _nicht unterstützen_, eine akzeptable Erfahrung zu bieten. Wenn Sie dies nicht tun, könnten Browser, die die von Ihnen verwendeten Funktionen nicht unterstützen, Ihre Websites möglicherweise nicht richtig anzeigen oder vollständig fehlschlagen, was zu einer schlechten Benutzererfahrung führt.

Lassen Sie uns das Konzept rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#feature_detection) angesprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // zeigt die Position auf einer Karte an, wie z.B. die Google Maps API
  });
} else {
  // Geben Sie dem Benutzer eine Auswahl von statischen Karten
}
```

Bevor wir fortfahren, möchten wir eines im Voraus sagen — verwechseln Sie Funktionsdetektion nicht mit **Browser-Sniffing** (Erkennen, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die um jeden Preis vermieden werden sollte. Weitere Details finden Sie unter [nicht Browser sniffen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#dont_browser_sniff).

## Eigene Funktionsdetektionstests schreiben

In diesem Abschnitt sehen wir uns die Implementierung eigener Funktionsdetektionstests in CSS und JavaScript an.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) in JavaScript testen.

Ein klassisches Beispiel könnte sein, die Unterstützung des [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Untergridwert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir das reguläre Grid verwenden, das zwar nicht so cool aussieht, aber gut funktioniert.

Anhand dieses Beispiels könnten wir ein Subgrid-Stylesheet einfügen, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Um dies zu tun, könnten wir zwei Stylesheets im Kopfteil unserer HTML-Datei einfügen: eines für das gesamte Styling und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` das gesamte Styling, das wir jedem Browser zukommen lassen möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Unterstützungsstufen selektiv auf Browser anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung.

Wir können ein `<script></script>`-Tag mit dem folgenden JavaScript in unser Dokument einfügen

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mit Hilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS bietet einen nativen Mechanismus zur Funktionsdetektion: die {{cssxref("@supports")}}-At-Regel. Diese funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), mit dem Unterschied, dass CSS nicht je nach Medienmerkmal wie Auflösung, Bildschirmbreite oder {{glossary("Seitenverhältnis")}} selektiv angewendet wird, sondern je nachdem, ob ein CSS-Feature unterstützt wird, ähnlich wie `CSS.supports()`.

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

Dieses At-Regel-Block wendet die CSS-Regel nur innerhalb an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und KEIN Semikolon am Ende einfügen.

`@supports` bietet auch `AND`, `OR` und `NOT` Logik — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* Regeln hier */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können die gesamte Funktionsdetektion in CSS ausführen, ohne JavaScript zu benötigen, und wir können die gesamte Logik in einer einzigen CSS-Datei verarbeiten, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, um die Unterstützung von CSS-Funktionen im Browser zu bestimmen.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Funktionsdetektionstest gesehen. Im Allgemeinen werden solche Tests über eines von wenigen gängigen Mustern durchgeführt.

Gängige Muster für erkennbare Funktionen sind:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt zur Nutzung der API oder einer anderen von Ihnen erkannten Funktion) in ihrem übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die Unterstützung der [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Auf navigator.geolocation-APIs zugreifen
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit {{domxref("Document.createElement()")}} und prüfen Sie, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt eine Möglichkeit zur Erkennung der Unterstützung der [Canvas API](/de/docs/Web/API/Canvas_API):

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Erstellen und auf Canvas-Elementen zeichnen
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert in einen "richtigen" booleschen Wert zu verwandeln, anstatt einen {{glossary("Truthy")}}/{{glossary("Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit {{domxref("Document.createElement()")}} und prüfen Sie, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt. Siehe den Funktionstest in [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) für ein Beispiel dieses Musters.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit {{domxref("Document.createElement()")}}, setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird. Siehe den Funktionstest in [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) für ein Beispiel dieses Musters.

Beachten Sie, dass einige Funktionen jedoch als unentdeckbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie zum Beispiel die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir möchten an dieser Stelle auch die {{domxref("Window.matchMedia")}} JavaScript-Funktion erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Medientestabfragen innerhalb von JavaScript auszuführen. Sie sieht folgendermaßen aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // führen Sie hier JavaScript aus.
}
```

Zum Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo es, um selektiv die Brick JavaScript-Bibliothek anzuwenden und sie zu nutzen, um das UI-Layout zu handhaben, jedoch nur für das Layout des kleinen Bildschirms (480px breit oder weniger). Wir verwenden zuerst das `media`-Attribut, um das Brick-CSS nur auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` im JavaScript mehrmals, um Brick-Navigationsfunktionen nur auszuführen, wenn wir uns im Layout des kleinen Bildschirms befinden (in den breiteren Bildschirm-Layouts kann alles gleichzeitig gesehen werden, sodass wir nicht zwischen verschiedenen Ansichten navigieren müssen).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte Funktionsdetektion in einem angemessenen Detailgrad, er erläuterte die Hauptkonzepte und zeigte Ihnen, wie Sie Ihre eigenen Funktionsdetektionstests implementieren können.

Als nächstes werden wir uns automatisierte Tests ansehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
