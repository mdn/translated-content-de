---
title: "`<geolocation>` HTML Geolocation-Element"
short-title: <geolocation>
slug: Web/HTML/Reference/Elements/geolocation
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{SeeCompatTable}}

Das **`<geolocation>`** [HTML](/de/docs/Web/HTML)-Element erstellt eine interaktive Steuerung, mit der der Benutzer seine Standortdaten mit der Seite teilen kann.

Es bietet:

- Eine intuitive Benutzeroberfläche, die vom Browser definiert wird.
- Ein Verfahren zur Verwaltung der erforderlichen Berechtigungen für die `geolocation`-Funktion.
- API-Funktionen zum Zugriff auf Standortdaten und zur Reaktion auf empfangene Standortdaten und Berechtigungsänderungen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{experimental_inline}}
  - : Ein boolesches Attribut, das, wenn es auf `true` gesetzt ist, angibt, dass der Browser sofort Standortdaten abrufen soll, wenn das `<geolocation>`-Element gerendert wird, sofern die Berechtigung zuvor erteilt wurde. Wenn es auf `false` gesetzt ist, werden die Standortdaten erst abgerufen, wenn der Benutzer die Steuerung aktiviert. Der Standardwert ist `false`.

    Wenn die Berechtigung vorher nicht erteilt wurde, hat dieses Attribut keine Auswirkung.

- `watch` {{experimental_inline}}
  - : Ein boolesches Attribut, das, wenn es auf `true` gesetzt ist, angibt, dass der Browser Standortdaten abrufen soll, wann immer sich die Position des Geräts des Benutzers ändert. Wenn es auf `false` gesetzt ist, werden die Standortdaten nur einmal abgerufen. Der Standardwert ist `false`.

## Beschreibung

Das `<geolocation>`-Element bietet eine deklarative, browserdefinierte Steuerung zur Freigabe von Standortdaten. In Chrome beispielsweise verfügt der Button über ein "Landkarten-Pin"-Symbol und intuitiven Text ("Standort verwenden" in englischen Inhalten).

Es ermöglicht auch eine intuitive Verwaltung von Benutzerberechtigungen.
Beispielsweise kann in Chrome der Benutzer, wenn er zuvor die Erlaubnis zur Nutzung der Standortdaten verweigert oder die Berechtigungsdialogbox ohne Entscheidung geschlossen hat, den Button erneut drücken, um seine Entscheidung zu aktualisieren.
In Fällen, in denen die Erlaubnis zuvor verweigert wurde, informieren nachfolgende Dialoge den Benutzer darüber, dass er zuvor die Freigabe der Standortdaten nicht erlaubt hat, und fragen, ob er weiterhin keine Erlaubnis erteilen oder diese erlauben möchte.

Ein wesentlicher Aspekt des `<geolocation>`-Elements ist, dass es die bewusste Entscheidung des Benutzers widerspiegelt und eine mögliche Nutzung blockiert, die den Benutzer dazu verleiten könnte, seine Standortdaten unwissentlich bereitzustellen (siehe [`<geolocation>`-Blockierung](#geolocation_blocking) für weitere Informationen).

Die DOM-API-Schnittstelle des Elements, [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement), bietet Funktionen zum Zugriff auf zurückgegebene Positionsdaten, den aktuellen Berechtigungsstatus und Fehler, wenn das Abrufen der Daten nicht erfolgreich war, was die Menge des zu schreibenden JavaScript-Codes reduziert. Darüber hinaus stehen Ereignisse zur Verfügung, um Code als Reaktion auf empfangene Standortdaten, Änderungen des Berechtigungsstatus und Benutzerinteraktionen mit dem Berechtigungsdialog auszuführen.

> [!NOTE]
> Aus Leistungsgründen sind maximal drei `<geolocation>`-Elemente auf einer Seite zulässig. Wird dieses Kontingent überschritten, wird die Funktionalität aller `<geolocation>`-Elemente deaktiviert.

### Beziehung zur Geolocation-API

Die [Geolocation-API](/de/docs/Web/API/Geolocation_API) bietet eine ältere Alternative zur Verarbeitung von Standortdaten. Diese API hat einige Nachteile, die das `<geolocation>`-Element beheben soll, insbesondere dass die Benutzeroberfläche und die zugrunde liegende Logik zur Anforderung der Daten jedes Mal von Grund auf neu implementiert werden müssen und die Handhabung der Berechtigungen unintuitiv sein kann.

Das `<geolocation>`-Element verwendet Funktionen der Geolocation-API im Hintergrund. Standardmäßig fordert der Browser Standortdaten einmal an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen worden wäre. Wenn das `watch`-Attribut jedoch auf `true` gesetzt ist, aktualisiert der Browser die Daten jedes Mal, wenn sich die Position des Geräts ändert, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen worden wäre.

Wenn die Daten erfolgreich abgerufen wurden, stehen sie in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft zur Verfügung, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt enthält. Wenn das Abrufen der Daten nicht erfolgreich war, stehen Fehlerinformationen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft zur Verfügung, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt enthält.

### Einstellung der Sprachoption des Buttons

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird vom `<geolocation>`-Element verwendet, um eine Sprache für den gerenderten Text auszuwählen. Das bedeutet, dass Sie ein `lang`-Attribut direkt auf das `<geolocation>`-Element oder auf einen seiner Vorfahren setzen können, um dem Browser mitzuteilen, welche Sprache für die Beschriftung des Buttons verwendet werden soll.

Wenn kein geeignetes `lang`-Attribut gesetzt ist, wird die bevorzugte Spracheinstellung des Browsers verwendet.

### Einfügen von Fallback-Inhalten

Sie können Fallback-Inhalte zwischen die öffnenden und schließenden Tags des `<geolocation>`-Elements einfügen, die angezeigt werden, wenn es nicht unterstützt wird. Beispielsweise könnten Sie eine "Nicht unterstützt"-Meldung einfügen:

```html
<geolocation>
  <p>Your browser doesn't support the Geolocation element.</p>
</geolocation>
```

Eine bessere Lösung in der Praxis könnte jedoch darin bestehen, ein reguläres {{htmlelement("button")}}-Element einzufügen, das die Geolocation-API verwendet, um Standortdaten abzurufen:

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
```

### `<geolocation>`-Blockierung

Ein zentrales Konzept bei der Gestaltung des `<geolocation>`-Elements ist, dass es die bewusste Entscheidung eines Benutzers widerspiegeln sollte, Positionsinformationen freizugeben, und gleichzeitig schlechte Akteure daran hindern sollte, Benutzer dazu zu verleiten, es zu aktivieren, beispielsweise durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Aus diesem Grund führt der Browser für jedes gerenderte Element eine Liste der sogenannten **Blockierungsgründe**.

Wenn ein Blocker auf ein `<geolocation>`-Element aktiv ist, wird dessen Funktionalität entweder vorübergehend oder dauerhaft gesperrt (je nach Grund). Wenn ein `<geolocation>`-Element blockiert wird, gilt es als ungültig. Sie können überprüfen, ob es ungültig ist, indem Sie die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Eigenschaft abfragen. Sie können auch den Grund, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason)-Eigenschaft zurückgeben — auf dieser Seite finden Sie eine vollständige Liste der möglichen Gründe.

### Styling-Beschränkungen

Das `<geolocation>`-Element hat mehrere Einschränkungen hinsichtlich der CSS-Stile, die darauf angewendet werden können. Einige dieser Einschränkungen sind dazu gedacht, grundlegende Zugänglichkeit sicherzustellen und deaktivieren den Button, wenn sie nicht eingehalten werden. Einige erzwingen bestimmte Werte oder Wertebereiche für verschiedene Eigenschaften.

Alle Eigenschaften, die nicht in den folgenden Unterabschnitten aufgeführt sind oder die logisch einem physischen in den folgenden Unterabschnitten aufgeführten Attribut entsprechen, werden ignoriert, wenn sie auf das `<geolocation>`-Element gesetzt werden.

#### Zugänglichkeitsbeschränkungen

Der gerenderte `<geolocation>`-Button wird deaktiviert (bedeutet, dass das Drücken keine Wirkung hat), wenn die folgenden Einschränkungen nicht eingehalten werden:

- Das [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)-Verhältnis zwischen {{cssxref("color")}} und {{cssxref("background-color")}} muss mindestens 3:1 betragen.
- Die {{cssxref("font-size")}} darf nicht kleiner als der `small`-Wert sein (im Falle von Schlüsselwortwerten) oder dessen berechneter Wert (im Falle anderer Werttypen).

#### Wertebeschränkungen

Die folgenden CSS-Eigenschaftswertebeschränkungen werden auf das `<geolocation>`-Element angewendet. Wenn versucht wird, diese Eigenschaften auf dem `<geolocation>`-Element auf Werte außerhalb der aufgeführten Beschränkungen zu setzen, wird der Wert auf den jeweiligen Beschränkungswert angepasst (im Fall einer genauen Wertebeschränkung) oder auf den nächstgelegenen berechneten oberen oder unteren Grenzwert (im Fall einer Bereichsbeschränkung).

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
  - : Zwischen `0` und `0.5em`, inklusive.
- {{cssxref("letter-spacing")}}
  - : Zwischen `-0.05em` und `0.2em`, inklusive.
- {{cssxref("letter-spacing")}}
  - : Zwischen `-0.05em` und `0.2em`, inklusive.
- {{cssxref("min-height")}}
  - : `1em` oder größer.
- {{cssxref("max-height")}}
  - : `3em` oder geringer. `none` ist ein akzeptierter Wert.
- {{cssxref("min-width")}}
  - : Der berechnete Wert von `fit-content` oder weniger.
- {{cssxref("border-width")}}
  - : `1em` oder weniger.

#### Komplexe Beschränkungen

Die folgenden Beschränkungen sind komplexer als einfache Wertebeschränkungen:

- Blockrichtungs-Polsterung
  - : Wenn die {{cssxref("block-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-block-start")}} und {{cssxref("padding-block-end")}} (und gleichwertige physische Eigenschaften für das aktuelle [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf maximal `1em` beschränkt und müssen gleich sein.
- Inline-Richtungs-Polsterung
  - : Wenn die {{cssxref("inline-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} (und gleichwertige physische Eigenschaften für das aktuelle [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf maximal `5em` beschränkt und müssen gleich sein.

#### Eigenschaften, die normal gesetzt werden können

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

Das `<geolocation>`-Element hat einen zugänglichen Namen, der in der [festgelegten Sprache](#einstellung_der_sprachoption_des_buttons) geschrieben ist. Es hat ebenfalls eine [`Rolle`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) als [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), damit es von Screenreadern als Button erkannt wird.

Darüber hinaus hat das `<geolocation>`-Element einen Standardwert für [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `0`, sodass es sich in Bezug auf die Tastaturfokussierung wie ein echter `<button>` verhält.

Verweisen Sie schließlich zurück auf den Abschnitt [Zugänglichkeitsbeschränkungen](#zugänglichkeitsbeschränkungen) für Informationen zu Styling-Beschränkungen, die auf das `<geolocation>`-Element angewendet werden, um grundlegende Anforderungen an die Barrierefreiheit durchzusetzen.

## Beispiele

### Beispiel für grundlegende Nutzung

Dieses Beispiel verwendet das `<geolocation>`-Element, um Ihre aktuelle Position abzurufen, die unter dem Button in einem {{htmlelement("p")}}-Element ausgegeben wird. Das Beispiel verwendet auch einen regulären `<button>`-Fallback, um die Standortdaten in nicht unterstützten Browsern abzurufen.

#### HTML

Wir fügen ein `<geolocation>`-Element mit einem `<button>`-Fallback darin ein, das in Browsern gerendert wird, die `<geolocation>` nicht unterstützen. Außerdem fügen wir ein `<p>`-Element ein, um Standortdaten und Fehler auszugeben.

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

In unserem Skript starten wir, indem wir eine Referenz zum Ausgabeelement `<p>` erhalten. Wir erkennen dann, ob das `<geolocation>`-Element unterstützt wird, indem wir `typeof HTMLGeolocationElement === "function"` testen:

- Wenn es unterstützt wird, holen wir zuerst eine Referenz auf das `<geolocation>`-Element und fügen dann einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Event-Listener hinzu.
  Wenn der Button gedrückt wird und die Daten abgerufen werden, gibt der Listener die (Breiten- und Längengrad-)Koordinaten in das Ausgabeelement `<p>` (abgerufen über die [`position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft) oder eine Fehlermeldung, wenn das Abrufen der Daten nicht erfolgreich war (abgerufen über die [`error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft) aus.
- Wenn es nicht unterstützt wird, holen wir eine Referenz auf das Fallback-`<button>`-Element und rufen die gleichen Daten ab und geben sie aus, jedoch verwenden wir dieses Mal einen `click`-Event-Listener auf dem Button und einen Aufruf von [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), um die Daten abzurufen.

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

Sehen Sie sich diesen Code [live an](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)). Sie können auch eine Version dieses Beispiels finden, die das `watch`-Attribut auf dem `<geolocation>`-Element enthält und daher Standortdaten jedes Mal abruft, wenn sich die Positionsangaben des Geräts des Benutzers ändern (sehen Sie es [live an](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) und den [Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Versuchen Sie, die Demos in einem unterstützten und einem nicht unterstützten Browser anzuzeigen, wenn möglich, und beachten Sie den Unterschied im Ablauf der Berechtigungsdialoge, wenn Sie die Erlaubnis zur Nutzung der `geolocation` erteilen oder verweigern.

Für eine Erläuterung eines umfassenderen Beispiels, das Standortdaten verwendet, um eine Karte Ihrer Umgebung zu erstellen, siehe die Referenzseite [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement).

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Satzinhalt</a
        >, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Jeder geeignete transparente Fallback-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Wegefall der Tags</th>
      <td>Kein, sowohl die Start- als auch die Endmarkierung sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das Satzinhalt akzeptiert.</td>
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
- [Geolocation-API](/de/docs/Web/API/Geolocation_API)
- [Berechtigungs-API](/de/docs/Web/API/Permissions_API)
- [Einführung in das `<geolocation>` HTML-Element](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
