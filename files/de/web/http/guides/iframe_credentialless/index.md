---
title: IFrame credentialless
slug: Web/HTTP/Guides/IFrame_credentialless
l10n:
  sourceCommit: 11a5944cd0a3bf015b2ee9c7ee4c55025dd878ca
---

{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern eine Möglichkeit, Drittanbieter-Ressourcen in {{htmlelement("iframe")}}s mit einem neuen, flüchtigen Kontext zu laden. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten seines regulären Ursprungs. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Seiten verwendet werden, die sich für eine cross-origin Isolation entscheiden – Beispiele sind {{jsxref("SharedArrayBuffer")}} und [Hochauflösende Timer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen bei [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden könnten, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal geleakt und von einem Angreifer erfasst werden können.

Um sich für cross-origin Isolation zu entscheiden, muss eine Ressource mit einem {{httpheader("Cross-Origin-Opener-Policy")}} mit einem Wert von `same-origin` (schützt Ihr Ursprung vor Angreifern) und {{httpheader("Cross-Origin-Embedder-Policy")}} mit einem Wert von `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung) bereitgestellt werden. Letzteres verhindert, dass ein Dokument alle beglaubigten cross-origin Ressourcen lädt, die dem Dokument nicht explizit die Erlaubnis mittels {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) erteilen.

Das Hauptproblem, das die Annahme der cross-origin Isolation limitiert, besteht darin, dass `Cross-Origin-Embedder-Policy` rekursiv angewendet wird – jeder Drittinhalt, der in `<iframe>`s in einem Dokument mit gesetztem `Cross-Origin-Embedder-Policy` geladen wird, muss ebenfalls `Cross-Origin-Embedder-Policy` bereitstellen, damit das Einbetten erfolgreich ist. Dies stellt ein Problem für Entwickler dar, die Drittanbieter-Inhalte in ihren Apps einbetten (wie z. B. Inhalte von Werbenetzwerken), da sie im Allgemeinen keine Kontrolle darüber haben – ihre einzige Wahl bisher war, darauf zu warten, dass die Anbieter von Drittanbieter-Inhalten `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung – Iframe credentialless

Ein `<iframe>` wird credentialless gemacht, indem das [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)-Attribut auf es angewendet oder die entsprechende DOM-Eigenschaft – [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) – auf `true` gesetzt wird.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless)-Eigenschaft kann von einem Dokument, das in einem `<iframe>` eingebettet ist, abgefragt werden, um zu testen, ob es in einem credentialless Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente im credentialless `<iframe>` mit neuen, flüchtigen Kontexten geladen werden – diese Kontexte haben keinen Zugriff auf die Daten, die mit ihren Ursprüngen verknüpft sind, zum Beispiel [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless Speicher wird separat mit Speicherschlüsseln partitioniert, die durch einen {{Glossary("Nonce", "Nonce")}} ("number used once") Wert modifiziert werden, der pro oberstes Dokument einmalig festgelegt wird. Ein Cookie, das in einem credentialless `<iframe>` gesetzt wird, ist nur von anderen selben Herkunft credentialless `<iframe>`s zugänglich, die unter demselben obersten Dokument eingebettet sind.

Der Nonce wird für jedes credentialless iframe geteilt, das ein Nachkomme desselben obersten Dokuments ist, aber er ist unterschiedlich für jedes verschiedene oberste Dokument, zu dem der Benutzer navigiert, und nicht mehr zugänglich, sobald der Benutzer weggegangen ist. Credentialless IFrames teilen Speicher nicht über verschiedene Seiten hinweg. Zurückgehend auf das oben erwähnte Cookie: Das Neuladen des Dokuments lädt die credentialless `<iframe>`s in einem anderen Kontext, sodass keine der zuvor gesetzten Cookies verfügbar sein werden.

Darüber hinaus:

- Pop-ups, die von credentialless iframes geöffnet werden, werden mit [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) gesetzt geöffnet. Dies verhindert, dass OAuth-Popup-Flüsse in credentialless iframes verwendet werden.
- Die automatische Ausfüllfunktion des Browsers oder die Funktion des Passwortmanagers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis davon ist, dass in credentialless `<iframe>`s geladene Dokumente effektiv vanilla oder "öffentliche" Versionen sind, die nicht mit sensiblen Informationen eines Benutzers personalisiert sind. Da diese Dokumente keine sensiblen Informationen zum Leaken enthalten, sind sie für potenzielle Angreifer nutzlos, und daher wird die Anforderung der Cross-Origin Embedder Policy für diese IFrames fallen gelassen.

## Rekursive credentialless in untergeordneten IFrames

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
- Das `<iframe>`-Attribut [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless)
