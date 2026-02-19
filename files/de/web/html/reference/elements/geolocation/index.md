---
title: "<geolocation>: Das Geolocation-Element"
slug: Web/HTML/Reference/Elements/geolocation
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{SeeCompatTable}}

Das **`<geolocation>`** [HTML](/de/docs/Web/HTML) Element erstellt ein interaktives Steuerelement, mit dem der Benutzer seine Standortdaten mit der Seite teilen kann.

Es bietet:

- Eine intuitive, vom Browser definierte Benutzeroberfläche.
- Einen Prozess zur Verwaltung der erforderlichen Berechtigungen für die `geolocation`-Funktion.
- API-Funktionen zum Zugriff auf Standortdaten und zur Reaktion auf empfangene Standortdaten und Änderungen der Berechtigungen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{experimental_inline}}
  - : Ein boolesches Attribut, das, wenn es auf `true` gesetzt ist, angibt, dass der Browser Standortdaten sofort abrufen soll, wenn das `<geolocation>`-Element gerendert wird, vorausgesetzt, die Erlaubnis wurde zuvor erteilt. Wenn es auf `false` gesetzt ist, werden die Standortdaten erst abgerufen, wenn der Benutzer die Steuerung aktiviert. Standardmäßig auf `false` gesetzt.

    Wenn die Erlaubnis zuvor nicht erteilt wurde, hat dieses Attribut keine Wirkung.

- `watch` {{experimental_inline}}
  - : Ein boolesches Attribut, das, wenn es auf `true` gesetzt ist, angibt, dass der Browser Standortdaten abrufen soll, wann immer sich die Position des Geräts des Benutzers ändert. Wenn es auf `false` gesetzt ist, werden die Standortdaten nur einmal abgerufen. Standardmäßig auf `false` gesetzt.

## Beschreibung

Das `<geolocation>`-Element bietet ein deklaratives, vom Browser definiertes Steuerelement zum Teilen von Standortdaten. In Chrome zum Beispiel verfügt die Schaltfläche über ein Symbol in Form eines "Kartenpins" und intuitiven Text ("Use location" in englischsprachigem Inhalt).

Es ermöglicht auch eine intuitive Verwaltung der Benutzerberechtigungen. Zum Beispiel in Chrome, wenn der Benutzer zuvor die Erlaubnis zum Zugriff auf Standortdaten verweigert hat oder den Berechtigungsdialog ohne Auswahlmöglichkeit abgelehnt hat, kann er die Schaltfläche erneut drücken, um seine Auswahl zu aktualisieren. In Fällen, in denen sie die Erlaubnis zuvor verweigert haben, informieren nachfolgende Dialoge darüber, dass sie zuvor nicht zugestimmt haben, Standortdaten zu teilen, und fragen sie, ob sie weiterhin nicht zustimmen oder zustimmen möchten.

Ein wesentlicher Aspekt des `<geolocation>`-Elements ist, dass es die bewusste Wahl des Benutzers widerspiegelt und eine mögliche Nutzung blockiert, die den Benutzer dazu verleiten könnte, unwissentlich seine Standortdaten bereitzustellen (siehe [`<geolocation>`-Blockierung](#geolocation_blocking) für weitere Informationen).

Die DOM-API-Schnittstelle des Elements, [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement), bietet Features zum Zugriff auf zurückgegebene Positionsdaten, aktuellen Berechtigungsstatus und Fehler, wenn der Datenabruf nicht erfolgreich war, wodurch die Menge an JavaScript-Logik reduziert wird, die geschrieben werden muss. Außerdem stehen Ereignisse zur Verfügung, um Code auszuführen, als Reaktion auf empfangene Standortdaten, Änderungen des Berechtigungsstatus und Benutzerinteraktionen mit dem Berechtigungsdialog.

> [!NOTE]
> Aus Leistungsgründen sind maximal drei `<geolocation>`-Elemente auf einer Seite erlaubt. Wenn dieses Kontingent überschritten wird, sind alle `<geolocation>`-Elemente deaktiviert.

### Beziehung zur Geolocation-API

Die [Geolocation API](/de/docs/Web/API/Geolocation_API) bietet eine ältere Alternative für den Umgang mit Standortdaten. Diese API hat einige Mängel, die das `<geolocation>`-Element lösen soll, insbesondere, dass die Benutzeroberfläche und die zugrunde liegende Logik zum Anfordern der Daten jedes Mal von Grund auf neu implementiert werden müssen und die Verwaltung der Berechtigungen unintuitiv sein kann.

Das `<geolocation>`-Element verwendet Funktionen der Geolocation API im Hintergrund. Standardmäßig fordert der Browser Standortdaten einmal an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen wurde. Wenn jedoch das `watch`-Attribut auf `true` gesetzt ist, aktualisiert der Browser die Daten jedes Mal, wenn sich die Position des Geräts ändert, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wurde.

Wenn Daten erfolgreich abgerufen werden, sind sie in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft verfügbar, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt enthält. Wenn der Datenabruf nicht erfolgreich ist, sind Fehlermeldungen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft verfügbar, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt enthält.

### Einstellung der Schaltflächensprache

Das globale Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) wird vom `<geolocation>`-Element verwendet, um eine Sprache für den gerenderten Text auszuwählen. Dies bedeutet, dass Sie ein `lang`-Attribut direkt auf dem `<geolocation>`-Element oder einem seiner Vererber setzen können, um dem Browser mitzuteilen, welche Sprache für das Schaltflächenlabel verwendet werden soll.

Wenn kein geeignetes `lang`-Attribut gesetzt ist, wird die bevorzugte Spracheinstellung des Browsers verwendet.

### Einfügen von Fallback-Inhalten

Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags des `<geolocation>`-Elements einfügen, die angezeigt werden, wenn es nicht unterstützt wird. Zum Beispiel könnten Sie eine "Nicht unterstützt" Meldung einfügen:

```html
<geolocation>
  <p>Your browser doesn't support the Geolocation element.</p>
</geolocation>
```

Eine bessere Lösung aus der realen Welt könnte jedoch darin bestehen, ein reguläres {{htmlelement("button")}}-Element einzufügen, das die Geolocation API verwendet, um Standortdaten abzurufen:

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
```

### `<geolocation>`-Blockierung

Eine der wichtigsten Ideen hinter dem Design des `<geolocation>`-Elements ist, dass es die bewusste Wahl eines Benutzers widerspiegeln soll, Positionsinformationen offenzulegen, und verhindert, dass böswillige Akteure Benutzer dazu verleiten, es zu aktivieren, zum Beispiel durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Aus diesem Grund führt der Browser für jedes gerenderte Element eine Aufzeichnung der sogenannten **Blocker-Gründe**.

Wenn ein Blocker auf ein `<geolocation>`-Element aktiv ist, wird es daran gehindert, zu funktionieren (blockiert), entweder vorübergehend oder dauerhaft, je nach Grund. Wenn ein `<geolocation>`-Element blockiert ist, sagt man, es sei ungültig. Sie können überprüfen, ob es ungültig ist, indem Sie die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Eigenschaft abfragen. Sie können auch den Grund abrufen, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason)-Eigenschaft – sehen Sie sich diese Seite für eine vollständige Liste möglicher Gründe an.

### Styling-Einschränkungen

Das `<geolocation>`-Element hat mehrere Einschränkungen bezüglich der CSS-Stile, die darauf angewendet werden können. Einige dieser Einschränkungen dienen der Durchsetzung grundlegender Barrierefreiheit und führen dazu, dass die Schaltfläche deaktiviert wird, wenn sie nicht eingehalten werden. Einige erzwingen bestimmte Werte oder Wertbereiche für verschiedene Eigenschaften.

Alle Eigenschaften, die in den folgenden Abschnitten nicht aufgeführt sind oder logisch einem physischen Attribut entsprechen, das in den folgenden Abschnitten aufgeführt ist, werden ignoriert, wenn sie auf das `<geolocation>`-Element gesetzt werden.

#### Zugriffsbeschränkungen

Die gerenderte `<geolocation>`-Schaltfläche wird deaktiviert (was bedeutet, dass das Drücken keine Wirkung hat), wenn die folgenden Einschränkungen nicht eingehalten werden:

- Das [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen {{cssxref("color")}} und {{cssxref("background-color")}} muss mindestens 3:1 betragen.
- Die {{cssxref("font-size")}} darf nicht kleiner als der Wert `small` sein (im Falle von Schlüsselwortwerten) oder ihr berechneter Wert (im Falle anderer Werttypen).

#### Werteinschränkungen

Die folgenden CSS-Eigenschaftswerteinschränkungen werden auf das `<geolocation>`-Element angewendet. Wenn versucht wird, diese Eigenschaften auf Werte zu setzen, die außerhalb der aufgelisteten Einschränkungen auf das `<geolocation>`-Element fallen, wird der Wert so angepasst, dass er der Einschränkung entspricht (im Fall einer genauen Wertbeschränkung) oder auf den nächstgelegenen berechneten Wert oberer oder unterer Grenze abgestimmt wird (im Fall einer Bereichsbeschränkung).

- {{cssxref("opacity")}}
  - : `1.0`
- {{cssxref("line-height")}}
  - : `normal`
- {{cssxref("white-space")}}
  - : `nowrap`
- {{cssxref("user-select")}}
  - : `none`
- {{cssxref("appearance")}}
  - : `auto`
- {{cssxref("box-sizing")}}
  - : `content-box`
- {{cssxref("vertical-align")}}
  - : `middle`
- {{cssxref("text-emphasis")}}
  - : `initial`
- {{cssxref("text-shadow")}}
  - : `initial`
- {{cssxref("outline-offset")}}
  - : `0` oder größer.
- {{cssxref("font-weight")}}
  - : `200` oder größer.
- {{cssxref("word-spacing")}}
  - : Zwischen `0` und `0.5em`, einschließlich.
- {{cssxref("letter-spacing")}}
  - : Zwischen `-0.05em` und `0.2em`, einschließlich.
- {{cssxref("min-height")}}
  - : `1em` oder größer.
- {{cssxref("max-height")}}
  - : `3em` oder weniger. `none` ist ein akzeptierter Wert.
- {{cssxref("min-width")}}
  - : Der berechnete Wert von `fit-content` oder weniger.
- {{cssxref("border-width")}}
  - : `1em` oder weniger.

#### Komplexe Einschränkungen

Die folgenden Einschränkungen sind komplexer als einfache Wertbeschränkungen:

- Blockrichtung-Padding
  - : Wenn die {{cssxref("block-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-block-start")}} und {{cssxref("padding-block-end")}} (und entsprechende physische Eigenschaften für den aktuellen [Schreibrichtung](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf ein Maximum von `1em` beschränkt und müssen gleich sein.
- Inline-Richtung-Padding
  - : Wenn die {{cssxref("inline-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} (und entsprechende physische Eigenschaften für den aktuellen [Schreibrichtung](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf ein Maximum von `5em` beschränkt und müssen gleich sein.

#### Normal einstellbare Eigenschaften

Die folgenden CSS-Eigenschaften können normal verwendet werden:

- {{cssxref("font-kerning")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("text-rendering")}}
- {{cssxref("align-self")}}
- {{cssxref("anchor-name")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, und {{cssxref("border-left")}}
- {{cssxref("clear")}}
- {{cssxref("color-scheme")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}
- {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}}, und {{cssxref("counter-set")}}
- {{cssxref("flex")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, und {{cssxref("flex-basis")}}
- {{cssxref("float")}}
- {{cssxref("height")}}
- {{cssxref("isolation")}}
- {{cssxref("justify-self")}}
- {{cssxref("left")}}
- {{cssxref("order")}}
- {{cssxref("orphans")}}
- {{cssxref("outline")}}, {{cssxref("outline-color")}}, und {{cssxref("outline-style")}}
- {{cssxref("overflow-anchor")}}
- {{cssxref("overscroll-behavior")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-x")}}, und {{cssxref("overscroll-behavior-y")}}
- {{cssxref("page")}}
- {{cssxref("position")}}
- {{cssxref("position-anchor")}}
- {{cssxref("right")}}
- {{cssxref("scroll-margin")}}, {{cssxref("scroll-margin-top")}}, {{cssxref("scroll-margin-right")}}, {{cssxref("scroll-margin-bottom")}}, und {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-padding")}}, {{cssxref("scroll-padding-top")}}, {{cssxref("scroll-padding-right")}}, {{cssxref("scroll-padding-bottom")}}, {{cssxref("scroll-padding-left")}}, {{cssxref("scroll-padding-inline-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-inline-end")}}, und {{cssxref("scroll-padding-block-end")}}
- {{cssxref("text-spacing-trim")}}
- {{cssxref("text-transform")}}
- {{cssxref("top")}}
- {{cssxref("visibility")}}
- {{cssxref("x")}}
- {{cssxref("y")}}
- {{cssxref("ruby-position")}}
- {{cssxref("user-select")}}
- {{cssxref("width")}}
- {{cssxref("will-change")}}
- {{cssxref("z-index")}}

## Barrierefreiheit

Das `<geolocation>`-Element hat einen zugänglichen Namen, der in der [eingestellten Sprache](#einstellung_der_schaltflächensprache) geschrieben ist. Es hat auch eine [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) als [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), damit es von Screenreadern als Schaltfläche erkannt wird.

Zusätzlich hat das `<geolocation>`-Element einen Standardwert für [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `0`, sodass es sich in Bezug auf die Tastaturfokussierung wie eine echte `<button>` verhält.

Zum Schluss verweisen Sie auf den Abschnitt [Zugriffsbeschränkungen](#zugriffsbeschränkungen) für Informationen zu den Stilbeschränkungen, die am `<geolocation>`-Element angewendet werden, um grundlegende Barrierefreiheitsanforderungen durchzusetzen.

## Beispiele

### Grundbeispiel

Dieses Beispiel verwendet das `<geolocation>`-Element, um Ihren aktuellen Standort abzurufen, der unterhalb der Schaltfläche in einem {{htmlelement("p")}}-Element ausgegeben wird. Das Beispiel nutzt auch eine reguläre `<button>`-Fallback-Version, um die Standortdaten in nicht unterstützenden Browsern abzurufen.

#### HTML

Wir fügen ein `<geolocation>`-Element mit einem darin geschachtelten `<button>` ein, das in Browsern gerendert wird, die `<geolocation>` nicht unterstützen. Wir fügen auch ein `<p>` hinzu, um Standortdaten und Fehler auszugeben.

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu dem Ausgabe-`<p>`-Element zu erhalten. Dann erkennen wir, ob das `<geolocation>`-Element unterstützt wird, indem wir `typeof HTMLGeolocationElement === "function"` testen:

- Wenn es unterstützt wird, greifen wir zuerst auf das `<geolocation>`-Element zu und fügen dann einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) Ereignis-Listener hinzu.
  Wenn die Schaltfläche gedrückt wird und die Daten abgerufen werden, druckt der Listener die (lat, long) Koordinaten in das Ausgabefeld `<p>` (abgerufen über die [`position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft) oder eine Fehlermeldung, falls der Datenabruf nicht erfolgreich war (abgerufen über die [`error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft).
- Wenn es nicht unterstützt wird, greifen wir auf das Fallback-`<button>`-Element zu und rufen die gleichen Daten ab, außer dass wir dieses Mal einen `click`-Ereignis-Listener an der Schaltfläche nutzen und über einen Aufruf von [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) die Daten abrufen.

```js
const outputElem = document.querySelector("#output");

if (typeof HTMLGeolocationElement === "function") {
  const geo = document.querySelector("geolocation");
  geo.addEventListener("location", () => {
    if (geo.position) {
      outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
    } else if (geo.error) {
      outputElem.textContent += `${geo.error.message}, `;
    }
  });
} else {
  const fallback = document.querySelector("#fallback");
  fallback.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        outputElem.textContent += `(${position.coords.latitude}, ${position.coords.longitude}), `;
      },
      (error) => {
        outputElem.textContent += `${error.message}, `;
      },
    );
  });
}
```

#### Ergebnis

Sehen Sie sich diesen Code [live an](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)). Sie finden auch eine Version dieses Beispiels, die das `watch`-Attribut auf dem `<geolocation>`-Element einschließt und daher Standortdaten jedes Mal abruft, wenn sich die Position des Geräts des Benutzers ändert (sehen Sie es [live an](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/), und der [Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Versuchen Sie, die Demos in einem unterstützten Browser und einem nicht unterstützten Browser anzuzeigen, wenn möglich, und beachten Sie den Unterschied im Berechtigungsdialogablauf, wenn Sie die Erlaubnis zur Nutzung von `geolocation` erteilen oder verweigern.

Für eine Erläuterung eines vollständigeren Beispiels, das Standortdaten nutzt, um eine Karte Ihres lokalen Gebiets zu erstellen, siehe die [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Referenzseite.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Jeder geeignete transparente Fallback-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das Phraseninhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)
- Die {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/de/docs/Web/API/Geolocation_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Einführung in das `<geolocation>` HTML-Element](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
