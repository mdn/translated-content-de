---
title: API für umschlossene Rahmen
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine der Hauptquellen für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsprobleme](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch wurden `<iframe>`s genutzt, um Drittanbieter-Cookies zu setzen, die verwendet werden können, um Informationen zu teilen und Nutzer über Websites hinweg zu verfolgen. Zusätzlich kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel durch die Nutzung von {{domxref("Window.postMessage()")}}).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Informationen aus dem `<iframe>` zu lesen — zum Beispiel können bedeutende Tracking-/Fingerprinting-Daten durch das Lesen der eingebetteten URL aus der `src`-Eigenschaft gewonnen werden, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf den DOM-Kontext des Einbettens zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partionierung von Speicher, sodass Cookie-Daten nicht länger für Tracking verwendet werden können (siehe zum Beispiel [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein anderes Puzzlestück zu lösen — sie sind `<iframe>`s in Form und Funktion sehr ähnlich, mit dem Unterschied, dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite geteilt werden kann.
- Ein `<fencedframe>` auf cross-site Daten zugreifen kann, aber nur unter sehr spezifischen kontrollierten Umständen, die die Privatsphäre des Nutzers wahren.
- Ein `<fencedframe>` nicht frei manipuliert oder durch reguläre Skripte auf seine Daten zugegriffen werden kann (zum Beispiel durch Lesen oder Setzen der Quell-URL). Der `<fencedframe>`-Inhalt kann nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM-Kontext des Einbettens zugreifen, noch kann der Einbettungskontext auf das DOM des `<fencedframe>` zugreifen.

Weitere Informationen über das Kommunikationsmodell von Fenced Frames finden Sie im Leitfaden zur [Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von cross-site Inhalten einzubetten oder Daten zu sammeln, und erfüllen unterschiedliche Anwendungsfälle auf eine privatsphäreerhaltende Weise. Die meisten dieser Anwendungsfälle stützten sich bisher auf Drittanbieter-Cookies oder andere Mechanismen, die schlecht für die Privatsphäre sind.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet sicheren Zugriff auf nicht partitionierte cross-site Daten, indem Ergebnisse in einem `<fencedframe>` berechnet und/oder angezeigt werden. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf schalten, welche Benutzer bereits auf anderen Seiten gesehen haben.
  - Entwickler können A/B-Tests durchführen, indem sie Varianten basierend auf einer Gruppe, zu der ein Benutzer gehört, oder basierend darauf, wie viele Benutzer bereits jede Variante gesehen haben, anzeigen.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was Benutzer auf anderen Websites gesehen haben. Zum Beispiel, wenn sie bereits Mitglied geworden sind, möchten Sie ihnen möglicherweise keine Beitrittsanzeigen für Ihr Mitgliedschaftsprogramm auf anderen Ihren Seiten anzeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) ermöglicht Entwicklern, interessensbasierte Werbeanzeigen umzusetzen, nämlich Retargeting- und benutzerdefinierte Zielgruppenanwendungsfälle. Sie kann mehrere Gebote für Anzeigeflächen auswerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s sammeln (stammend aus Shared Storage oder der Protected Audience API) und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie Inhalte, die in einem {{htmlelement("fencedframe")}} eingebettet sind, nicht direkt über reguläres Skript.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein {{domxref("FencedFrameConfig")}}-Objekt, das dann via JavaScript als Wert der {{domxref("HTMLFencedFrameElement.config")}}-Eigenschaft des `<fencedframe>` gesetzt wird.

Im folgenden Beispiel wird eine `FencedFrameConfig` aus einer Anzeigenausschreibung der Protected Audience API erhalten, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...Ausschreibungs-Konfiguration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss an den `runAdAuction()` Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird die resultierende {{jsxref("Promise")}} zu einer undurchsichtigen [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), die nur in einem `<iframe>` verwendet werden kann.

Wie auch immer, der Browser speichert eine URL mit der Zielspeicherort der Einbettungs-Inhalte — gemappt auf die undurchsichtige URN oder die interne `url`-Eigenschaft der `FencedFrameConfig`. Der URL-Wert kann nicht durch JavaScript im einbettenden Kontext gelesen werden.

> [!NOTE]
> Unterstützung für undurchsichtige URNs in `<iframe>`s wird geboten, um die Migration bestehender Implementierungen zu [Privacy Sandbox](https://developers.google.com/privacy-sandbox) APIs zu erleichtern. Diese Unterstützung ist als vorübergehend vorgesehen und wird in Zukunft entfernt, wenn die Einführung zunimmt.

> **Hinweis:** `FencedFrameConfig` hat eine {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}}-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument an den Shared Storage des `<fencedframe>` zu übergeben. Diese könnte beispielsweise in einem {{domxref("Worklet")}} über das `<fencedframe>` aufgerufen werden, um einen Bericht zu generieren. Siehe die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) für mehr Details.

### Zugriff auf die Funktionalität für umschlossene Rahmen im `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine {{domxref("Window.fence")}}-Eigenschaft, die eine {{domxref("Fence")}}-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind.
Zum Beispiel bietet {{domxref("Fence.reportEvent()")}} eine Möglichkeit, die Übermittlung von Berichterstattungsdaten via einem [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere angegebene URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolitik

Nur bestimmte Funktionen, die für die Verwendung in `<fencedframes>` entwickelt wurden, können über Berechtigungspolicies aktiviert werden; andere von Policies kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolicies verfügbar für umschlossene Rahmen](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für mehr Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>` ausgeführt werden, einschließlich eingebetteter `<iframe>`s innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` setzen, für jedes Dokument, das in ein `<fencedframe>` geladen werden soll, oder `<iframe>`, das innerhalb eines `<fencedframe>` eingebettet ist.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von umschlossenen Rahmen auf HTTP-Header sind wie folgt:

- [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind innerhalb von umschlossenen Rahmen nicht verfügbar, da sie sich auf [Berechtigungspolitik](/de/docs/Web/HTTP/Permissions_Policy) Delegation stützen, die zum Leaken von Daten verwendet werden könnte.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) Einstellungen werden auf neue Browsing-Kontexte erzwungen, die von innerhalb umschlossener Rahmen geöffnet werden, da sie ansonsten verwendet werden könnten, um Informationen an andere Ursprünge zu leaken. Jedes neue Fenster, das von innerhalb eines umschlossenen Rahmens geöffnet wird, wird [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass {{domxref("Window.opener")}} `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert ist.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte, die in `<fencedframe>`-Elemente geladen werden, anzugeben.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) benutzerdefinierte Einstellungen können nicht von umschlossenen Rahmen geerbt werden, um Datenschutzprobleme zu mindern. Für das Laden eines umschlossenen Rahmens müssen Sie keine `sandbox`-CSP angeben (was die unten aufgeführten Werte impliziert) oder die folgenden sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload` Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event) Ereignisse werden nicht auf umschlossenen Rahmen ausgelöst, da sie Informationen in Form eines Zeitstempels des Seitenlöschens leaken können. Implementierungen zielen darauf ab, so viele potenzielle Leckagen wie möglich zu eliminieren.

## Schnittstellen

- {{domxref("FencedFrameConfig")}}
  - : Stellt die Navigation eines {{htmlelement("fencedframe")}} dar, d.h. welchen Inhalt es anzeigen wird. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert der {{domxref("HTMLFencedFrameElement.config")}} gesetzt.
- {{domxref("Fence")}}
  - : Enthält mehrere Funktionen, die relevant für die Funktionalität umschlossener Rahmen sind. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.
- {{domxref("HTMLFencedFrameElement")}}
  - : Stellt ein `<fencedframe>`-Element in JavaScript dar und bietet Eigenschaften zur Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.deprecatedReplaceInURN()")}}
  - : Ersetzt angegebene Zeichenfolgen innerhalb der gemappten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft der `FencedFrameConfig` entspricht.
- {{domxref("Window.fence")}}
  - : Gibt eine {{domxref("Fence")}}-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.

## Registrierung und lokales Testen

Bestimmte API-Funktionen, die {{domxref("FencedFrameConfig")}}s erstellen, wie {{domxref("Navigator.runAdAuction()")}} ([Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)) und {{domxref("WindowSharedStorage.selectURL()")}} ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie {{domxref("Fence.reportEvent()")}}, erfordern, dass Sie Ihre Website in einem [Privacy Sandbox Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) registrieren. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren umschlossenen Rahmen-Code weiterhin lokal testen, ohne sich zu registrieren. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
