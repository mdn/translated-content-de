---
title: IFrame credentialless
slug: Web/HTTP/Guides/IFrame_credentialless
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern einen Mechanismus, um Drittanbieter-Ressourcen in {{htmlelement("iframe")}}s mit einem neuen, flüchtigen Kontext zu laden. Es hat keinen Zugriff auf das Netzwerk, die Cookies und die Speicherdaten seines regulären Ursprungs. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des Top-Level-Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit aktiviertem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites verwendet werden, die sich für eine cross-origin Isolation entscheiden – Beispiele sind {{jsxref("SharedArrayBuffer")}} und [Hochauflösende Timer](/de/docs/Web/API/DOMHighResTimeStamp). Dies liegt an dem Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden, bei denen die vertraulichen Informationen eines Opfers über einen Seitenkanal geleakt und von einem Angreifer erfasst werden können.

Um sich für eine cross-origin Isolation zu entscheiden, muss eine Ressource mit einer {{httpheader("Cross-Origin-Opener-Policy")}} mit einem Wert von `same-origin` (schützt Ihren Ursprung vor Angreifern) und einer {{httpheader("Cross-Origin-Embedder-Policy")}} mit einem Wert von `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung) bereitgestellt werden. Letzteres verhindert, dass ein Dokument beliebige authentifizierte cross-origin Ressourcen lädt, die dem Dokument nicht explizit die Erlaubnis erteilen, indem sie {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) verwenden.

Das Hauptproblem, das die Einführung der cross-origin Isolation einschränkt, ist die Tatsache, dass das `Cross-Origin-Embedder-Policy` rekursiv angewendet wird – alle Drittanbieter-Inhalte, die in `<iframe>`s in einem Dokument mit gesetzter `Cross-Origin-Embedder-Policy` geladen werden, müssen ebenfalls `Cross-Origin-Embedder-Policy` implementieren, damit die Einbettung erfolgreich ist. Dies ist für Entwickler, die Drittanbieter-Inhalte in ihren Apps einbetten (wie z.B. Inhalte von Werbenetzwerken), problematisch, da sie in der Regel keine Kontrolle darüber haben – ihre einzige Wahl bestand bisher darin, darauf zu warten, dass Drittanbieter die `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird durch Anwenden des [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless)-Attributs oder durch Setzen der gleichwertigen DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` zu einem credentialless IFrame gemacht.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless) Eigenschaft kann von einem Dokument, das in einem `<iframe>` eingebettet ist, abgefragt werden, um zu testen, ob es in einem credentialless Kontext ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente innerhalb des credentialless `<iframe>` mit neuen, flüchtigen Kontexten geladen werden – diese Kontexte haben keinen Zugriff auf die mit ihren Ursprüngen verbundenen Daten, wie z.B. [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless Speicher ist separat unterteilt mit Speicher-Schlüsseln, die mit einem {{Glossary("Nonce", "nonce")}} ("Nummer, die einmal verwendet wird") Wert modifiziert werden, der einmal pro Top-Level-Dokument festgelegt wird. Ein Cookie, das in einem credentialless `<iframe>` gesetzt wird, ist nur von anderen gleichen Ursprungs credentialless `<iframe>`s zugänglich, die unter demselben Top-Level-Dokument eingebettet sind.

Der nonce wird für jedes credentialless iframe, das ein Nachkomme desselben Top-Level-Dokuments ist, geteilt, ist jedoch unterschiedlich für jedes verschiedene Top-Level-Dokument, zu dem der Benutzer navigiert, und nicht mehr zugänglich, sobald der Benutzer die Navigation beendet hat. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. Bezüglich des oben erwähnten Cookies bedeutet das erneute Laden des Dokuments, dass die credentialless `<iframe>`s in einem anderen Kontext geladen werden, so dass keine der vorher gesetzten Cookies verfügbar sind.

Zusätzlich:

- Pop-ups, die von credentialless iframes geöffnet werden, werden mit gesetztem [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) geöffnet. Dies verhindert, dass OAuth-Pop-up-Flows in credentialless iframes verwendet werden.
- Die Autofill- bzw. Passwortmanager-Funktionalität des Browsers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis ist, dass Dokumente, die in credentialless `<iframe>`s geladen werden, effektiv Standard- oder "öffentliche" Versionen sind, die nicht mit sensiblen Informationen eines Benutzers angepasst sind. Da keine sensiblen Informationen verfügbar sind, die aus diesen Dokumenten geleakt werden könnten, sind sie für potenzielle Angreifer wertlos, und daher entfällt die Anforderung der Cross-Origin Embedder Policy für diese IFrames.

## Rekursives credentialless in Kinder-IFrames

Wenn `credentialless` auf ein `<iframe>` gesetzt ist, das Kinder-`<iframe>`s in dem darin geladenen Dokument eingebettet hat, erben diese Kinder-`<iframe>`s die credentialless-Einstellung.

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
