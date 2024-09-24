---
title: IFrame ohne Anmeldedaten
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}{{SeeCompatTable}}

**IFrame ohne Anmeldedaten** bietet Entwicklern eine Möglichkeit, Ressourcen von Drittanbietern in {{htmlelement("iframe")}}s mit einem neuen, flüchtigen Kontext zu laden. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten des regulären Ursprungs. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Dokumente von Drittanbietern einbetten können, die dies nicht tun.

## Das Problem

Verschiedene Web-API-Funktionen können nur auf Websites verwendet werden, die sich für eine isolierte Cross-Origin-Nutzung entscheiden — Beispiele sind {{jsxref("SharedArrayBuffer")}} und {{domxref("DOMHighResTimeStamp", "hochauflösende Timer", "", "nocode")}}. Der Grund dafür ist das Risiko, dass solche Funktionen in [Spectre-Angriffen](https://spectreattack.com/spectre.pdf) ausgenutzt werden können, bei denen vertrauliche Informationen eines Opfers über einen Seitenkanal durchsickern und von einem Angreifer erfasst werden können.

Um sich für eine isolierte Cross-Origin-Nutzung zu entscheiden, muss eine Ressource mit einer {{httpheader("Cross-Origin-Opener-Policy")}} mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern) und einer {{httpheader("Cross-Origin-Embedder-Policy")}} mit dem Wert `credentialless` oder `require-corp` (schützt Opfer vor Ihrem Ursprung) bereitgestellt werden. Letzteres verhindert, dass ein Dokument beliebige, über Anmeldedaten verfügende, Cross-Origin-Ressourcen lädt, die dem Dokument nicht explizit die Erlaubnis erteilen, indem sie die {{httpheader("Cross-Origin-Resource-Policy")}} oder das [Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) verwenden.

Das Hauptproblem, das die Einführung der isolierten Cross-Origin-Nutzung einschränkt, besteht darin, dass die `Cross-Origin-Embedder-Policy` rekursiv angewendet wird — alle Drittanbieter-Inhalte, die in `<iframe>`s in einem Dokument mit gesetzter `Cross-Origin-Embedder-Policy` geladen werden, müssen ebenfalls eine `Cross-Origin-Embedder-Policy` verwenden, damit die Einbettung erfolgreich ist. Dies ist ein Problem für Entwickler, die Drittanbieter-Inhalte in ihre Apps einbetten (wie Inhalte von Werbenetzwerken), da sie in der Regel keine Kontrolle darüber haben — ihre einzige Wahl war bisher, darauf zu warten, dass die Drittanbieter-Inhaltsanbieter die `Cross-Origin-Embedder-Policy` umsetzen.

Dieses Problem kann durch IFrame ohne Anmeldedaten gelöst werden.

## Die Lösung — IFrame ohne Anmeldedaten

Ein `<iframe>` wird ohne Anmeldedaten gemacht, indem das [`credentialless`](/de/docs/Web/HTML/Element/iframe#credentialless)-Attribut darauf angewendet oder die entsprechende DOM-Eigenschaft — {{domxref("HTMLIFrameElement.credentialless")}} — auf `true` gesetzt wird.

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
> Die {{domxref("window.credentialless")}}-Eigenschaft kann von einem in einem `<iframe>` eingebetteten Dokument abgefragt werden, um zu testen, ob es in einem kontextlosen Modus ausgeführt wird. Ein Wert von `true` bedeutet, dass das einbettende `<iframe>` ohne Anmeldedaten ist.

Dies führt dazu, dass die Dokumente innerhalb des `credentialless`-`<iframe>`s unter Verwendung neuer, flüchtiger Kontexte geladen werden — diese Kontexte haben keinen Zugriff auf die Daten, die mit ihren Ursprüngen verbunden sind, wie beispielsweise [Cookies](/de/docs/Web/HTTP/Cookies) und [localStorage](/de/docs/Web/API/Window/localStorage). Der speicherlose Speicher wird separat partitioniert, wobei die Speicher-Schlüssel durch einen einmalig verwendeten ("Nonce")-Wert modifiziert werden, der einmal pro oberstem Dokument festgelegt wird. Ein in einem `credentialless`-`<iframe>` gesetztes Cookie ist nur von anderen gleichartigen Ursprungs-`credentialless`-`<iframe>`s zugänglich, die unterhalb des gleichen obersten Dokuments eingebettet sind.

Der "Nonce" wird für jedes `credentialless`-`iframe` freigegeben, das ein Nachfahre desselben obersten Dokuments ist, ist jedoch für jedes unterschiedliche oberste Dokument, zu dem der Benutzer navigiert, unterschiedlich und nicht mehr zugänglich, sobald der Benutzer die Seite verlassen hat. `Credentialless` IFrames teilen keinen Speicher zwischen verschiedenen Seiten. Beim erwähnten Cookie wird beim erneuten Laden des Dokuments das `credentialless`-`<iframe>` in einem anderen Kontext geladen, sodass keiner der zuvor gesetzten Cookies verfügbar sein wird.

Zusätzlich:

- Pop-ups, die von `credentialless` IFrames geöffnet werden, werden mit gesetztem [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) geöffnet. Dies verhindert, dass OAuth-Pop-up-Flows in `credentialless` IFrames verwendet werden.
- Die Autofill- oder Passwort-Manager-Funktionalität des Browsers ist in `credentialless` `<iframe>`s nicht verfügbar.

Das Ergebnis davon ist, dass Dokumente, die in `credentialless`-`<iframe>`s geladen werden, im Wesentlichen unveränderte oder "öffentliche" Versionen sind, die nicht mit sensiblen Informationen eines Benutzers angepasst sind. Da keine sensiblen Informationen vorhanden sind, die von diesen Dokumenten durchsickern könnten, sind sie für potenzielle Angreifer nicht von Nutzen, und daher wird die Anforderung der Cross-Origin-Embedder-Policy für diese IFrames aufgehoben.

## Rekursive `credentialless` in eingebetteten IFrames

Wenn `credentialless` auf einem `<iframe>` gesetzt ist, das eingebettete `<iframe>`s im geladenen Dokument enthält, erben diese eingebetteten `<iframe>`s die `credentialless`-Einstellung.

## Live-Demo

Verwenden Sie die [https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/)-Demo, um IFrame ohne Anmeldedaten in Aktion zu sehen.

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
- {{domxref("HTMLIFrameElement.credentialless")}}
