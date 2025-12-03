---
title: IFrame credentialless
slug: Web/HTTP/Guides/IFrame_credentialless
l10n:
  sourceCommit: bb435e7556282e5dbe5ae9476b0a185c3d3ede32
---

{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern eine Möglichkeit, Drittanbieterinhalte in {{htmlelement("iframe")}}s mit einem neuen, flüchtigen Kontext zu laden. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicher seiner regulären Herkunft. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des übergeordneten Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites genutzt werden, die sich für die Isolation über Ursprung hinweg entscheiden – Beispiele sind {{jsxref("SharedArrayBuffer")}} und [Hochauflösende Zeitgeber](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden könnten, bei denen sensible Informationen des Opfers über einen Seitenkanal ausgelesen und von einem Angreifer erfasst werden können.

Um sich für die Isolation über Ursprung hinweg zu entscheiden, muss eine Ressource mit einem {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern) und einem {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung) bedient werden. Letzteres verhindert, dass ein Dokument irgendwelche gekennzeichneten ursprunghübergreifenden Ressourcen lädt, die dem Dokument keine ausdrückliche Erlaubnis mit {{httpheader("Cross-Origin-Resource-Policy")}} oder [CORS](/de/docs/Web/HTTP/Guides/CORS) erteilen.

Das Hauptproblem bei der Einführung der Isolation über Ursprung hinweg ist die Tatsache, dass `Cross-Origin-Embedder-Policy` rekursiv angewendet wird – jegliche Drittinhalte, die in `<iframe>`s in einem Dokument mit gesetztem `Cross-Origin-Embedder-Policy` geladen werden, müssen ebenfalls `Cross-Origin-Embedder-Policy` bereitstellen, damit die Einbettung erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieterinhalte in ihre Apps einbetten (wie z.B. Werbenetzwerkinhalte), da sie normalerweise keine Kontrolle darüber haben – ihre einzige Wahl bisher war das Warten darauf, dass die Drittanbieterinhalt-Lieferanten `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird credentialless gemacht, indem das [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)-Attribut darauf angewendet wird oder die entsprechende DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` gesetzt wird.

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

Oder:

```html
<iframe width="960" height="600"> </iframe>
```

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre vulnerability Wikipedia page";
iframeElem.src =
  "https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)";
```

> [!NOTE]
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless)-Eigenschaft kann von einem Dokument abgefragt werden, das in ein `<iframe>` eingebettet ist, um zu testen, ob es in einem credentialless-Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente innerhalb des credentialless `<iframe>`s mit neuen, flüchtigen Kontexten geladen werden — diese Kontexte haben keinen Zugriff auf die mit ihren Ursprüngen verknüpften Daten, zum Beispiel [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless-Speicher wird separat partitioniert mit Speicherschlüsseln, die durch einen einmal verwendeten Wert (Nonce) modifiziert werden, der einmal pro übergeordnetem Dokument festgelegt wird. Ein Cookie, das in einem credentialless `<iframe>` gesetzt wird, wird nur von anderen credentialless `<iframe>`s mit demselben Ursprung zugänglich sein, die unterhalb desselben übergeordneten Dokuments eingebettet sind.

Der Nonce wird für jedes credentialless iframe, das ein Nachfolger desselben übergeordneten Dokuments ist, geteilt, aber er ist unterschiedlich für jedes spezifische übergeordnete Dokument, zu dem der Benutzer navigiert, und nicht mehr zugänglich, nachdem der Benutzer weiter navigiert hat. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Bezüglich des oben genannten Cookies: Das Neuladen des Dokuments wird die credentialless `<iframe>`s in einem anderen Kontext laden, sodass keine der zuvor gesetzten Cookies verfügbar sein werden.

Zusätzlich:

- Pop-ups, die von credentialless iframes geöffnet werden, sind mit [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) gesetzt. Dies verhindert, dass OAuth-Popup-Flows in credentialless iframes verwendet werden.
- Die Autofill- oder Passwortmanager-Funktionalität des Browsers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis ist, dass Dokumente, die in credentialless `<iframe>`s geladen werden, tatsächlich generische oder "öffentliche" Versionen sind, die nicht mit sensiblen Benutzerdaten individuell gestaltet sind. Da keine sensiblen Informationen zur Leckage aus diesen Dokumenten zur Verfügung stehen, sind sie für potenzielle Angreifer nutzlos, und daher kann die Anforderung der Cross-Origin Embedder Policy für diese IFrames fallen gelassen werden.

## Rekursives Credentialless in untergeordneten IFrames

Wenn `credentialless` auf ein `<iframe>` gesetzt wird, das untergeordnete `<iframe>`s in dem darin geladenen Dokument eingebettet hat, erben diese untergeordneten `<iframe>`s die credentialless-Einstellung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS)
- Das `<iframe>` [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)-Attribut
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless)
