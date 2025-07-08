---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern eine Möglichkeit, Drittanbieter-Ressourcen in {{htmlelement("iframe")}}s mit einem neuen, flüchtigen Kontext zu laden. Dabei werden das übliche Origin-Netzwerk, Cookies und Speicherdaten nicht verwendet. Stattdessen wird ein neuer Kontext genutzt, der an die Lebensdauer des obersten Dokuments gebunden ist. Dadurch können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Features können nur auf Seiten genutzt werden, die sich für eine Cross-Origin-Isolation entscheiden — Beispiele hierfür sind {{jsxref("SharedArrayBuffer")}} und [hochaufgelöste Timer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden können, bei denen geheime Informationen eines Opfers über einen Seitenkanal durch einen Angreifer abgegriffen werden können.

Um sich für eine Cross-Origin-Isolation zu entscheiden, muss eine Ressource mit einer {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihr Origin vor Angreifern) und einer {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Origin) bereitgestellt werden. Letztere verhindert, dass ein Dokument jegliche fremd-originierte Ressourcen mit Anmeldeinformationen lädt, die dem Dokument nicht explizit die Erlaubnis mit {{httpheader("Cross-Origin-Resource-Policy")}} oder [CORS](/de/docs/Web/HTTP/Guides/CORS) erteilen.

Das Haupthindernis bei der Übernahme der Cross-Origin-Isolation ist die Tatsache, dass die `Cross-Origin-Embedder-Policy` rekursiv angewendet wird — jeglicher Drittanbieter-Inhalt, der in `<iframe>`s in einem Dokument geladen wird, bei dem `Cross-Origin-Embedder-Policy` gesetzt ist, muss ebenfalls `Cross-Origin-Embedder-Policy` einsetzen, damit die Einbettung erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieter-Inhalte in ihre Apps einbetten möchten (wie z. B. Inhalte von Anzeigennetzwerken), da sie im Allgemeinen keine Kontrolle darüber haben — ihre einzige Option bestand bisher darin, darauf zu warten, dass Drittanbieter-Inhaltsanbieter `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird durch das Hinzufügen des [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)-Attributs oder durch das Setzen der entsprechenden DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` credentialless gemacht.

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

Dadurch werden die Dokumente innerhalb des credentialless `<iframe>` mit neuen, flüchtigen Kontexten geladen — diese Kontexte haben keinen Zugriff auf die Daten, die mit ihren Ursprüngen verbunden sind, zum Beispiel [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless-Speicher wird separat partitioniert, mit durch ein Nonce ("number used once") modifizierten Speicher-Schlüsseln, die einmal pro oberstes Dokument festgelegt werden. So ist ein Cookie, das in einem credentialless `<iframe>` gesetzt wurde, nur von anderen gleichartigen credentialless `<iframe>`s zugänglich, die in dasselbe oberste Dokument eingebettet sind.

Das Nonce wird für jedes credentialless Iframe geteilt, das ein Nachkomme desselben obersten Dokuments ist, aber es ist für jedes unterschiedliche oberste Dokument, zu dem der Benutzer navigiert, verschieden und nicht mehr zugänglich, sobald der Benutzer weiter navigiert. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Zurück zum oben genannten Cookie: Beim Neuladen des Dokuments wird das credentialless `<iframe>` in einem anderen Kontext geladen, sodass keine zuvor gesetzten Cookies verfügbar sind.

Zusätzlich:

- Pop-ups, die durch credentialless Iframes geöffnet werden, werden mit [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) geöffnet, was verhindert, dass OAuth-Pop-up-Flows in credentialless Iframes verwendet werden.
- Die Browser-Autofill-Funktionalität oder Passwortmanager-Funktionalität ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis ist, dass Dokumente, die in credentialless `<iframe>`s geladen werden, effektiv Standardversionen oder "öffentliche" Versionen sind, die nicht mit sensiblen Informationen eines Benutzers angepasst sind. Da in diesen Dokumenten keine sensiblen Informationen verfügbar sind, die abgegriffen werden könnten, sind sie für potenzielle Angreifer von keinem Nutzen und das Erfordernis der Cross-Origin Embedder Policy entfällt für diese IFrames.

## Rekursive credentialless innerhalb von Kind-IFrames

Wenn `credentialless` auf einem `<iframe>` gesetzt ist, das Kind-`<iframe>`s im geladenen Dokument eingebettet hat, erben diese Kind-`<iframe>`s die credentialless-Einstellung.

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
