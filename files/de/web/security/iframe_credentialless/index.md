---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern eine Möglichkeit, Drittanbieterressourcen in {{htmlelement("iframe")}}s in einem neuen, temporären Kontext zu laden. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicher des regulären Ursprungs. Stattdessen wird ein neuer Kontext verwendet, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit COEP eingestellt Drittanbieterdokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites verwendet werden, die sich für eine Cross-Origin-Isolation entschieden haben — Beispiele sind {{jsxref("SharedArrayBuffer")}} und [Hochauflösungstimer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an der Gefahr, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden können, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal geleakt und von einem Angreifer erfasst werden können.

Um sich für eine Cross-Origin-Isolation zu entscheiden, muss eine Ressource mit einer {{httpheader("Cross-Origin-Opener-Policy")}} mit einem Wert von `same-origin` (schützt Ihren Ursprung vor Angreifern) und einer {{httpheader("Cross-Origin-Embedder-Policy")}} mit einem Wert von `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung) ausgeliefert werden. Letzteres verhindert, dass ein Dokument alle fremden Ressourcen lädt, die keine explizite Erlaubnis erteilen, indem es die {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) verwendet.

Das Hauptproblem, das die Einführung der Cross-Origin-Isolation einschränkt, ist die Tatsache, dass `Cross-Origin-Embedder-Policy` rekursiv angewendet wird — alle Drittinhalte, die in `<iframe>`s in einem Dokument mit einer `Cross-Origin-Embedder-Policy` geladen werden, müssen ebenfalls `Cross-Origin-Embedder-Policy` implementieren, damit die Einbettung gelingt. Dies ist ein Problem für Entwickler, die Drittinhalte in ihren Apps einbetten (wie z.B. Anzeigenetzwerkinhalte), da sie im Allgemeinen keine Kontrolle darüber haben — ihre einzige Wahl bisher war, darauf zu warten, dass die Drittanbieterinhaltanbieter `Cross-Origin-Embedder-Policy` umsetzen.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird credentialless gemacht, indem das [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless)-Attribut angewendet oder die gleichwertige DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` gesetzt wird.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless)-Eigenschaft kann von einem Dokument abgefragt werden, das in einem `<iframe>` eingebettet ist, um zu testen, ob es in einem credentialless-Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente innerhalb des credentialless `<iframe>`s unter Verwendung neuer, temporärer Kontexte geladen werden — diese Kontexte haben keinen Zugriff auf die mit ihren Ursprüngen verbundenen Daten; zum Beispiel [Cookies](/de/docs/Web/HTTP/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless Speicher wird separat mit Speicher-Schlüsseln partitioniert, die durch einen Nonce-Wert ("Number used once") modifiziert werden, der einmal pro oberstes Dokument festgelegt wird. Ein Cookie, das in einem credentialless `<iframe>` gesetzt wird, ist nur von anderen same-origin credentialless `<iframe>`s zugänglich, die unterhalb desselben obersten Dokuments eingebettet sind.

Der Nonce wird für jedes credentialless IFrame geteilt, das ein Nachkomme desselben obersten Dokuments ist, aber er ist unterschiedlich für jedes eindeutige oberste Dokument, zu dem der Benutzer navigiert, und nicht mehr zugänglich, sobald der Benutzer weg navigiert. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Um auf das oben erwähnte Cookie zurückzukommen: Wenn das Dokument neu geladen wird, werden die credentialless `<iframe>`s in einem anderen Kontext geladen, sodass keine der zuvor gesetzten Cookies verfügbar sein werden.

Zusätzlich:

- Pop-ups, die von credentialless iframes geöffnet werden, werden mit [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) gesetzt geöffnet. Dies verhindert, dass OAuth-Popup-Flows in credentialless iframes verwendet werden.
- Die Autofill- oder Passwortmanager-Funktionalität des Browsers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis ist, dass Dokumente, die in credentialless `<iframe>`s geladen werden, effektiv generische oder "öffentliche" Versionen sind, die nicht mit sensiblen Informationen eines Benutzers angepasst sind. Da keine sensiblen Informationen verfügbar sind, die von diesen Dokumenten geleaked werden könnten, sind sie für potenzielle Angreifer nutzlos, und daher entfällt die Anforderung der Cross-Origin-Embedder-Policy für diese IFrames.

## Rekursives credentialless in Kind-IFrames

Wenn `credentialless` auf einem `<iframe>` gesetzt ist, das Kind-`<iframe>`s in dem Dokument enthält, das innerhalb davon geladen wird, erben diese Kind-`<iframe>`s die credentialless-Einstellung.

## Live-Demonstration

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
- Das `<iframe>` [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless)-Attribut
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless)
