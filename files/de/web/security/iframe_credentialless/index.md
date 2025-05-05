---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

{{SeeCompatTable}}

**IFrame credentialless** bietet Entwicklern einen Mechanismus, um Drittanbieter-Ressourcen in {{htmlelement("iframe")}}s mit einem neuen, temporären Kontext zu laden. Dieser hat keinen Zugriff auf das reguläre Netzwerk seiner Herkunft, Cookies und Speicherdaten. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites verwendet werden, die sich für die Cross-Origin-Isolation entscheiden – Beispiele hierfür sind {{jsxref("SharedArrayBuffer")}} und [High-Resolution-Timer](/de/docs/Web/API/DOMHighResTimeStamp). Der Grund hierfür ist das Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal abgegriffen und von einem Angreifer erfasst werden können.

Um sich für Cross-Origin-Isolation zu entscheiden, muss eine Ressource mit einem {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihre Herkunft vor Angreifern) und einem {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrer Herkunft) bereitgestellt werden. Letzteres verhindert, dass ein Dokument credentialierte Cross-Origin-Ressourcen lädt, die dem Dokument nicht explizit über {{httpheader("Cross-Origin-Resource-Policy")}} oder [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) die Erlaubnis erteilen.

Das Hauptproblem, das die Einführung der Cross-Origin-Isolation einschränkt, ist die Tatsache, dass `Cross-Origin-Embedder-Policy` rekursiv angewendet wird – jeder Drittanbieter-Inhalt, der in `<iframe>`s in einem Dokument mit gesetztem `Cross-Origin-Embedder-Policy` geladen wird, muss ebenfalls `Cross-Origin-Embedder-Policy` einsetzen, damit das Einbetten erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieter-Inhalte in ihre Apps einbinden (wie Inhalte aus Werbenetzwerken), da sie im Allgemeinen keine Kontrolle darüber haben – ihre einzige Wahl bisher war es, zu warten, bis die Drittanbieter-Inhaltsanbieter `Cross-Origin-Embedder-Policy` implementieren.

Dieses Problem kann durch IFrame credentialless gelöst werden.

## Die Lösung — Iframe credentialless

Ein `<iframe>` wird durch Anwenden des [`credentialless`](/de/docs/Web/HTML/Reference/Elements/iframe#credentialless) Attributs oder durch Setzen der gleichwertigen DOM-Eigenschaft — [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) — auf `true` versehen.

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
> Die [`window.credentialless`](/de/docs/Web/API/Window/credentialless) Eigenschaft kann von einem Dokument abgefragt werden, das in einem `<iframe>` eingebettet ist, um zu testen, ob es in einem credentialless Kontext läuft. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` credentialless ist.

Dies führt dazu, dass die Dokumente in dem credentialless `<iframe>` mit neuen, temporären Kontexten geladen werden – diese Kontexte haben keinen Zugriff auf die mit ihren Herkünften verbundenen Daten; zum Beispiel [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der credentialless Speicher wird separat partitioniert mit Speicherschlüsseln, die durch einen „Nonce“ (einmalige Nummer) Wert modifiziert werden, der einmal pro oberstem Dokument gesetzt wird. Ein Cookie, das in einem credentialless `<iframe>` gesetzt wird, ist nur aus anderen gleichen Herkunft credentialless `<iframe>`s zugänglich, die unter demselben obersten Dokument eingebettet sind.

Der Nonce wird für jedes credentialless iframe, das von demselben obersten Dokument abstammt, gemeinsam genutzt, ist jedoch unterschiedlich für jedes unterschiedliche oberste Dokument, zu dem der Benutzer navigiert, und ist nicht mehr zugänglich, sobald der Benutzer weiter navigiert hat. Credentialless IFrames teilen keinen Speicher über verschiedene Seiten hinweg. In Bezug auf das oben erwähnte Cookie wird beim Neuladen des Dokuments der credentialless `<iframe>` in einem anderen Kontext geladen, sodass keines der zuvor gesetzten Cookies verfügbar ist.

Zusätzlich:

- Pop-ups, die von credentialless iframes geöffnet werden, werden mit [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) gesetzt geöffnet. Dies verhindert, dass OAuth-Pop-up-Flows in credentialless iframes verwendet werden.
- Die Autofill- oder Passwort-Manager-Funktion des Browsers ist in credentialless `<iframe>`s nicht verfügbar.

Das Ergebnis davon ist, dass Dokumente, die in credentialless `<iframe>`s geladen werden, effektiv unveränderte oder „öffentliche“ Versionen sind, die nicht mit sensiblen Informationen eines Benutzers personalisiert sind. Da keine sensiblen Informationen vorhanden sind, die aus diesen Dokumenten geleakt werden könnten, sind sie für potenzielle Angreifer nutzlos, und daher wird die Anforderung der Cross-Origin Embedder Policy für diese IFrames aufgehoben.

## Rekursive credentialless innerhalb von Kinder-IFrames

Wenn `credentialless` auf einem `<iframe>` gesetzt ist, das untergeordnete `<iframe>`s im geladenen Dokument enthält, erben diese untergeordneten `<iframe>`s die credentialless Einstellung.

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
