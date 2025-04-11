---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern eine Möglichkeit, Ressourcen Dritter in {{htmlelement("iframe")}}s mit einem neuen, temporären Kontext zu laden. Dieser hat keinen Zugriff auf das reguläre Ursprungsnetzwerk, Cookies und Speicher-Daten. Er nutzt einen neuen Kontext, der lokal zur Lebensdauer des Top-Level-Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit aktivierter COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Seiten genutzt werden, die sich für Cross-Origin-Isolation entscheiden — Beispiele sind {{jsxref("SharedArrayBuffer")}} und [hochauflösende Timer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden könnten, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal offengelegt und von einem Angreifer erfasst werden können.

Um sich für Cross-Origin-Isolation zu entscheiden, muss eine Ressource mit einem {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` bereitgestellt werden (schützt Ihren Ursprung vor Angreifern) und {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung). Letzteres verhindert, dass ein Dokument Ressourcen mit Anmeldedaten lädt, die dem Dokument nicht ausdrücklich die Erlaubnis erteilen, indem sie {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) verwenden.

Das Hauptproblem bei der Einführung von Cross-Origin-Isolation ist die Tatsache, dass `Cross-Origin-Embedder-Policy` rekursiv angewendet wird — jeglicher Drittanbieter-Inhalt, der in `<iframe>`s in einem Dokument mit einer gesetzten `Cross-Origin-Embedder-Policy` geladen wird, muss ebenfalls `Cross-Origin-Embedder-Policy` einsetzen, damit die Einbettung erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieter-Inhalte in ihre Apps einbetten (wie z.B. Inhalte von Werbenetzwerken), da sie in der Regel keine Kontrolle darüber haben — ihre einzige Wahl war bisher, darauf zu warten, dass die Drittanbieter-Content-Anbieter `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird durch Hinzufügen des [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)-Attributs oder durch Setzen der entsprechenden DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` credentialless gemacht.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless)-Eigenschaft kann von einem Dokument, das in einem `<iframe>` eingebettet ist, abgefragt werden, um zu testen, ob es in einem credentialless-Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente innerhalb des credentialless `<iframe>` mit neuen, temporären Kontexten geladen werden — diese Kontexte haben keinen Zugriff auf die mit ihren Ursprüngen verbundenen Daten; zum Beispiel [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless-Speicher wird separat partitioniert, wobei die Speicher-Schlüssel mit einem einmaligen ("number used once") Wert modifiziert werden, der einmal pro Top-Level-Dokument festgelegt wird. Ein in einem credentialless `<iframe>` gesetztes Cookie ist nur von anderen gleichartigen credentialless `<iframe>`s zugänglich, die unter demselben Top-Level-Dokument eingebettet sind.

Der einmalige Wert wird für jedes credentialless-Iframe innerhalb desselben Top-Level-Dokuments geteilt, ist jedoch für jedes unterschiedliche Top-Level-Dokument, zu dem der Benutzer navigiert, unterschiedlich und ist nicht länger zugänglich, sobald der Benutzer weg navigiert hat. Credentialless-IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Zurück zum oben genannten Cookie: Das Neuladen des Dokuments lädt die credentialless `<iframe>`s in einem anderen Kontext, sodass keine der zuvor gesetzten Cookies verfügbar sein werden.

Zusätzlich:

- Pop-Ups, die von credentialless iframes geöffnet werden, haben [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) gesetzt. Dies verhindert, dass OAuth-Popup-Abläufe in credentialless iframes genutzt werden.
- Die Autofill-Funktion des Browsers oder die Funktionalität eines Passwort-Managers sind in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis davon ist, dass in credentialless `<iframe>`s geladene Dokumente effektiv unveränderte oder "öffentliche" Versionen sind, die nicht mit sensiblen Nutzerdaten individualisiert sind. Da keine sensiblen Informationen zur Verfügung stehen, die aus diesen Dokumenten geleakt werden könnten, sind sie für potenzielle Angreifer nutzlos, und daher entfällt die Anforderung der Cross-Origin Embedder Policy für diese IFrames.

## Rekursive credentialless in geschachtelten IFrames

Wenn `credentialless` auf ein `<iframe>` gesetzt ist, das geschachtelte `<iframe>`s im geladenen Dokument eingebettet hat, erben diese geschachtelten `<iframe>`s die credentialless-Einstellung.

## Live-Demo

Verwenden Sie die [https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/) Demo, um IFrame credentialless in Aktion zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS)
- Das `<iframe>` [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless) Attribut
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless)
