---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern einen Mechanismus, um Drittanbieterressourcen in {{htmlelement("iframe")}}s mit einem neuen, ephemeren Kontext zu laden. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicher der regulären Herkunft. Es verwendet einen neuen Kontext, der auf die Lebensdauer des obersten Dokuments beschränkt ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites verwendet werden, die sich für eine cross-origin Isolierung entscheiden — Beispiele sind {{jsxref("SharedArrayBuffer")}} und [Hochpräzisionstimer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden können, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal durch einen Angreifer erfasst werden können.

Um sich für die cross-origin Isolierung zu entscheiden, muss eine Ressource mit einer {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihre Herkunft vor Angreifern) und einer {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrer Herkunft) bereitgestellt werden. Letzteres verhindert, dass ein Dokument irgendwelche credentialisierten cross-origin Ressourcen lädt, die dem Dokument nicht explizit die Erlaubnis durch {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) erteilen.

Das Hauptproblem, das die Übernahme der cross-origin Isolierung einschränkt, ist die Tatsache, dass `Cross-Origin-Embedder-Policy` rekursiv angewendet wird — jeder Drittanbieter-Inhalt, der in `<iframe>`s in einem Dokument mit gesetzter `Cross-Origin-Embedder-Policy` geladen wird, muss ebenfalls `Cross-Origin-Embedder-Policy` bereitstellen, damit die Einbettung erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieter-Inhalte in ihren Apps einbetten (wie zum Beispiel zu einem Werbenetzwerk gehörende Inhalte), da sie im Allgemeinen keine Kontrolle darüber haben — ihre einzige Option bis jetzt war, darauf zu warten, dass die Drittanbieter-Inhaltsanbieter die `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird durch Anwenden des [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless) Attributs credentialless gemacht oder durch Setzen der entsprechenden DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true`.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless) Eigenschaft kann von einem Dokument abgefragt werden, das in einem `<iframe>` eingebettet ist, um zu testen, ob es in einem credentialless Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente innerhalb des credentialless `<iframe>`s unter Verwendung neuer, ephemerer Kontexte geladen werden — diese Kontexte haben keinen Zugriff auf die mit ihren Herkünften verbundenen Daten, wie zum Beispiel [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless Speicher wird separat partitioniert mit Speicherschlüsseln, die durch einen Nonce ("number used once") Wert modifiziert sind, der einmalig pro oberstes Dokument gesetzt wird. Ein in einem credentialless `<iframe>` gesetztes Cookie ist nur von anderen gleichartigen credentialless `<iframe>`s zugänglich, die unter demselben obersten Dokument eingebettet sind.

Der Nonce wird für jedes credentialless iframe geteilt, das ein Nachkomme desselben obersten Dokuments ist, jedoch ist er für jedes distincte, vom Nutzer aufgerufene oberste Dokument unterschiedlich und nicht mehr zugänglich, sobald der Nutzer die Seite verlassen hat. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Bezüglich des zuvor erwähnten Cookies: Das Neuladen des Dokuments führt dazu, dass die credentialless `<iframe>`s in einem anderen Kontext geladen werden, sodass keine der zuvor gesetzten Cookies verfügbar sein werden.

Zusätzlich:

- Pop-ups, die von credentialless iframes geöffnet werden, werden mit [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) gesetzt. Dies verhindert, dass OAuth-Pop-up-Flows in credentialless iframes verwendet werden.
- Die Autovervollständigung des Browsers oder die Funktionalität des Passwort-Managers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis ist, dass Dokumente, die in credentialless `<iframe>`s geladen werden, im Wesentlichen unveränderte oder "öffentliche" Versionen sind, die nicht mit sensiblen Informationen eines Benutzers angepasst sind. Da keine sensiblen Informationen verfügbar sind, die aus diesen Dokumenten geleakt werden könnten, sind sie für potenzielle Angreifer wertlos, und daher wird die Anforderung an die Cross-Origin Embedder Policy für diese IFrames aufgehoben.

## Rekursive credentialless in untergeordneten IFrames

Wenn `credentialless` in einem `<iframe>` gesetzt ist, das untergeordnete `<iframe>`s im darin geladenen Dokument enthält, erben diese untergeordneten `<iframe>`s die credentialless Einstellung.

## Live-Demo

Nutzen Sie die [https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/) Demo, um IFrame credentialless in Aktion zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS)
- Das `<iframe>` [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless) Attribut
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless)
