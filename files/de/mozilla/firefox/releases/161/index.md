---
title: "Firefox 161: Versionshinweise für Entwickler (Beta)"
short-title: Firefox 161 (Beta)
slug: Mozilla/Firefox/Releases/161
l10n:
  sourceCommit: 664ce172ad6323a979824a6627ef16796b9b7d65
---

Dieser Artikel informiert über die Änderungen in Firefox 161, die Entwickler betreffen.
Firefox 161 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [24. November 2026](https://whattrainisitnow.com/release/?version=161).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

### SVG

- Das Attribut [`referrerpolicy`](/de/docs/Web/SVG/Reference/Attribute/referrerpolicy) wird jetzt für die Elemente {{SVGElement("image")}}, {{SVGElement("script")}} und {{SVGElement("feImage")}} unterstützt. Gleiches gilt für die zugehörigen Eigenschaften [`SVGImageElement.referrerPolicy`](/de/docs/Web/API/SVGImageElement/referrerPolicy), [`SVGScriptElement.referrerPolicy`](/de/docs/Web/API/SVGScriptElement/referrerPolicy) und [`SVGFEImageElement.referrerPolicy`](/de/docs/Web/API/SVGFEImageElement/referrerPolicy).
  Damit lässt sich steuern, wie viele Referrer-Informationen im Header {{HTTPHeader("Referer")}} gesendet werden, wenn das Element die über sein Attribut `href` referenzierte Ressource abruft. Dies funktioniert genauso wie das Attribut `referrerpolicy` bei den HTML-Elementen {{HTMLElement("img")}} und {{HTMLElement("script")}}.
  ([Firefox-Bug 2079321](https://bugzil.la/2079321)).

<!-- #### Removals -->

### CSS

- Die CSS-Funktion {{cssxref("random")}} wird jetzt unterstützt. Sie erzeugt einen Zufallswert innerhalb eines angegebenen Bereichs. Optional lassen sich die möglichen Werte auf Vielfache einer angegebenen Schrittweite beschränken. Mit dem optionalen Parameter `<random-key>` können `random()`-Funktionen denselben Zufallsbasiswert verwenden, beispielsweise bei unterschiedlichen Elementen oder in unterschiedlichen Eigenschaften. ([Firefox-Bug 2072252](https://bugzil.la/2072252)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Eigenschaften [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) und [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) der Schnittstelle `WebTransport` werden jetzt unterstützt. Das gilt auch für die entsprechenden `options`-Eigenschaften, mit denen sie im Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) festgelegt werden können.
  Diese Eigenschaften geben die maximale Anzahl eingehender unidirektionaler beziehungsweise bidirektionaler Streams an, die der Server nach Erwartung der Anwendung gleichzeitig geöffnet haben wird.
  ([Firefox-Bug 2007825](https://bugzil.la/2007825)).
- Die [Clipboard API](/de/docs/Web/API/Clipboard_API) unterstützt jetzt [benutzerdefinierte Zwischenablageformate](/de/docs/Web/API/Clipboard_API#custom_clipboard_formats). Damit können Web-Apps mithilfe von [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) eigene Datenformate schreiben und lesen.
  Ein benutzerdefiniertes Format ist ein MIME-Typ mit dem Präfix `"web "`, beispielsweise `"web text/x-my-format"`.
  Benutzerdefinierte Formate können nur von einer Seite gelesen werden, die dieselbe Origin hat wie die Seite, von der sie geschrieben wurden.
  ([Firefox-Bug 2053725](https://bugzil.la/2053725), [Firefox-Bug 2086505](https://bugzil.la/2086505)).

- Die Eigenschaft [`NavigationTransition.to`](/de/docs/Web/API/NavigationTransition/to) der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Sie gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt für die laufende Navigation zurück. So kann Code außerhalb des Event-Handlers für [`navigate`](/de/docs/Web/API/Navigation/navigate_event) ermitteln, wohin die Navigation führt.
  Beispielsweise kann ein Handler für [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) damit angeben, welche Navigation fehlgeschlagen ist.
  ([Firefox-Bug 1991959](https://bugzil.la/1991959)).

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) unterstützt jetzt den optionalen Parameter [`setParameterOptions`](/de/docs/Web/API/RTCRtpSender/setParameters#setparameteroptions).
  Damit können Sie den Encoder auffordern, für eine Kodierung einen Keyframe zu erzeugen – und zwar im selben Aufruf, mit dem Sie Kodierungsparameter des Senders wie `active` oder `scaleResolutionDownBy` ändern. Empfänger müssen nach der Änderung dann keinen Keyframe mehr anfordern.
  ([Firefox-Bug 2057265](https://bugzil.la/2057265)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `script.callFunction` gibt jetzt den Fehler `invalid argument` zurück, wenn ein Argument oder der `this`-Wert einen lokalen Wert mit unbekanntem `type` enthält. Dies gilt auch für verschachtelte Werte. Zuvor wurden solche Werte stillschweigend durch `undefined` ersetzt. ([Firefox-Bug 2084105](https://bugzil.la/2084105)).
- Die Befehle `script.evaluate` und `script.callFunction` löschen ein bereits gesetztes Flag für die Nutzeraktivierung nicht mehr, wenn sie mit `userActivation: false` aufgerufen werden. ([Firefox-Bug 2084107](https://bugzil.la/2084107)).
- Ein Problem wurde behoben, bei dem die Befehle `browsingContext.navigate` und `browsingContext.reload` hängen bleiben oder mit einem falschen Fehler fehlschlagen konnten, wenn eine Navigation begann, während das vorherige Dokument noch geladen wurde. ([Firefox-Bug 2088640](https://bugzil.la/2088640)).
- Ein Leistungsproblem wurde behoben, durch das jeder Aufruf des Befehls `browsingContext.setViewport` im Laufe einer Sitzung langsamer wurde. ([Firefox-Bug 2084362](https://bugzil.la/2084362)).
- Der Befehl `network.continueRequest` wurde korrigiert: Wird der Body einer Anfrage ersetzt, die bereits einen Body hatte, aktualisiert der Befehl jetzt auch den Header `Content-Length`. Zuvor konnte beim Server ein abgeschnittener oder unvollständiger Body ankommen. ([Firefox-Bug 2088814](https://bugzil.la/2088814)).

## Änderungen für Add-on-Entwickler

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 161 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Dokumentübergreifende View Transitions** (Nightly): `dom.viewTransitions.cross-document.enabled`

  [Dokumentübergreifende View Transitions](/de/docs/Web/API/View_Transition_API/Using#basic_mpa_view_transition) sind in Nightly jetzt standardmäßig aktiviert.
  Damit lässt sich der Übergang zwischen Seiten derselben Origin in einer mehrseitigen App animieren.
  ([Firefox-Bug 2084340](https://bugzil.la/2084340)).

- **Render-Blocking** (Nightly): `dom.element.blocking.enabled`

  Das Attribut `blocking="render"` der Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} ist in Nightly jetzt standardmäßig aktiviert.
  Damit können Sie das Rendern der Seite blockieren, bis das gekennzeichnete Stylesheet geladen oder das Skript ausgeführt wurde. So erscheint die Seite nicht zunächst ohne Formatierung oder unvollständig.
  ([Firefox-Bug 2084340](https://bugzil.la/2084340)).

- **Wert `match-parent` für `quotes`** (Nightly): `layout.css.quotes.match-parent.enabled`

  Die CSS-Eigenschaft {{cssxref("quotes")}} unterstützt jetzt den Wert {{cssxref("quotes", "match-parent", "#match-parent")}}. Dadurch verwendet ein Element die Anführungszeichen aus demselben Paar von Anführungszeichen wie sein Elternelement.
  ([Firefox-Bug 1752382](https://bugzil.la/1752382)).
