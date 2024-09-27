---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern eine Möglichkeit, Drittanbieter-Ressourcen in {{htmlelement("iframe")}}s mit einem neuen, kurzlebigen Kontext zu laden. Dieser hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten seines regulären Ursprungs. Er verwendet einen neuen Kontext, der lokal für die Lebensdauer des Top-Level-Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites verwendet werden, die sich für eine Isolation über Ursprünge hinweg entschieden haben – Beispiele umfassen {{jsxref("SharedArrayBuffer")}} und [hochauflösende Timer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden können, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal geleakt und von einem Angreifer erfasst werden können.

Um sich für die Isolation über Ursprünge hinweg zu entscheiden, muss eine Ressource mit einer {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern) und einer {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung) bereitgestellt werden. Letzteres verhindert, dass ein Dokument irgendwelche cross-origin Ressourcen mit Berechtigungen lädt, die nicht explizit mit {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) gewährt wurden.

Das Hauptproblem, das die Annahme der Isolation über Ursprünge begrenzt, ist die Tatsache, dass die `Cross-Origin-Embedder-Policy` rekursiv angewendet wird – jegliche Drittdaten, die in `<iframe>`s eines Dokuments mit einer gesetzten `Cross-Origin-Embedder-Policy` geladen werden, müssen auch die `Cross-Origin-Embedder-Policy` implementieren, damit die Einbettung erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieter-Inhalte in ihre Apps einbetten (wie Inhalte von Werbenetzwerken), da sie in der Regel keine Kontrolle darüber haben – ihre einzige Wahl bis jetzt bestand darin, darauf zu warten, dass die Drittanbieter-Inhaltsanbieter die `Cross-Origin-Embedder-Policy` umsetzen.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — IFrame credentialless

Ein `<iframe>` wird credentialless gemacht, indem das [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless) Attribut darauf angewendet oder die gleichwertige DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` gesetzt wird.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless) Eigenschaft kann von einem in einem `<iframe>` eingebetteten Dokument abgefragt werden, um zu testen, ob es in einem credentialless Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dadurch werden die Dokumente im credentialless `<iframe>` in neuen, kurzlebigen Kontexten geladen — diese Kontexte haben keinen Zugriff auf die Daten, die mit ihren Ursprüngen verbunden sind; zum Beispiel [Cookies](/de/docs/Web/HTTP/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless Speicher wird separat partitioniert, wobei die Speicher-Schlüssel durch einen einmaligen Nonce ("nur einmal verwendete Zahl") Modifiziert werden, der einmal pro Top-Level-Dokument festgelegt wird. So kann ein Cookie, das in einem credentialless `<iframe>` gesetzt wird, nur von anderen same-origin credentialless `<iframe>`s aus erreichbar sein, die unterhalb desselben Top-Level-Dokuments eingebettet sind.

Der Nonce wird für jedes credentialless iframe geteilt, das ein Nachkomme desselben Top-Level-Dokuments ist, aber er ist unterschiedlich für jedes unterschiedliche Top-Level-Dokument, zu dem der Benutzer navigiert, und nicht mehr zugänglich, sobald der Benutzer weg navigiert. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Beim zuvor erwähnten Cookie führt das erneute Laden des Dokuments zum Laden des credentialless `<iframe>`s in einem anderen Kontext, sodass keine der zuvor gesetzten Cookies verfügbar sein wird.

Zusätzlich:

- Pop-ups, die von credentialless iframes geöffnet werden, werden mit [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) gesetzt geöffnet. Dies verhindert, dass OAuth-Popup-Flows in credentialless iframes verwendet werden.
- Die Autofill- oder Passwort-Manager-Funktionalität des Browsers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis ist, dass in credentialless `<iframe>`s geladene Dokumente effektiv unmodifizierte oder "öffentliche" Versionen ohne individuelle oder sensible Informationen sind. Da keine sensiblen Informationen verfügbar sind, um sie aus diesen Dokumenten zu leaken, sind sie für potenzielle Angreifer nutzlos, und somit entfällt die Anforderung für das Cross-Origin Embedder Policy für diese IFrames.

## Rekursives credentialless innerhalb von Kind-IFrames

Wenn `credentialless` auf einem `<iframe>` gesetzt wird, das Kind-`<iframe>`s im geladenen Dokument eingebettet hat, erben diese Kind-`<iframe>`s die credentialless Einstellung.

## Live Demo

Verwenden Sie die [https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/) Demo, um IFrame credentialless in Aktion zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS)
- Das `<iframe>` [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless) Attribut
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless)
