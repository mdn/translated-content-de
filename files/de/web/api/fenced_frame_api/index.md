---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elemente eingebettet sind.

## Konzepte und Nutzung

Eine Hauptquelle für [Datenschutz](/de/docs/Web/Privacy) und [Sicherheits](/de/docs/Web/Security)probleme im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elemente eingebettet sind. Historisch wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die zum Teilen von Informationen und zum Verfolgen von Nutzern über Websites hinweg eingesetzt werden können. Darüber hinaus kann der in einem `<iframe>` eingebettete Inhalt mit seinem einbettenden Dokument kommunizieren (zum Beispiel durch die Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Informationen aus dem `<iframe>` auszulesen — zum Beispiel können Sie potenziell erhebliche Tracking/Fingerprinting-Daten erhalten, wenn Sie die eingebettete URL aus der `src`-Eigenschaft lesen, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontexts zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, sodass Cookie-Daten nicht mehr zum Tracking verwendet werden können (siehe zum Beispiel [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind `<iframe>`s in Form und Funktion sehr ähnlich, außer dass:

- Kommunikation nicht zwischen den `<fencedframe>`-Inhalten und ihrer einbettenden Site geteilt werden kann.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, aber nur in einem sehr spezifischen Satz von kontrollierten Umständen, die den Datenschutz des Nutzers bewahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripte zugänglich gemacht werden (zum Beispiel durch Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und umgekehrt kann der einbettende Kontext nicht auf das DOM des `<fencedframe>` zugreifen.

Weitere Informationen über das Kommunikationsmodell von fenced frames finden Sie im [Kommunikationsleitfaden mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von Cross-Site-Inhalten einzubetten oder Daten zu sammeln, und erfüllen unterschiedliche Anwendungsfälle in einer datenschutzfreundlichen Weise. Die meisten davon beruhten zuvor auf Drittanbieter-Cookies oder anderen Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet Zugriff auf nicht partitionierte Cross-Site-Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf ausliefern, welche die Nutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen und Varianten basierend auf einer Gruppe, der ein Nutzer zugewiesen ist, oder basierend darauf zeigen, wie viele Nutzer jede bereits gesehen haben.
  - Unternehmen können die Nutzererfahrung basierend darauf anpassen, was sie auf anderen Websites gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen möglicherweise keine Mitgliedschafts-Anzeigen auf Ihren anderen Seiten anzeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) ermöglicht es Entwicklern, interessengruppenbasiertes Werben zu implementieren, nämlich Remarketing- und benutzerdefinierte Audience-Anwendungsfälle. Sie kann mehrere Gebote für Werbeflächen auswerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s (stammend aus dem Shared Storage oder der Protected Audience API) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie die eingebetteten Inhalte in einem {{htmlelement("fencedframe")}} nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, erzeugt eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann via JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, das dann zum Anzeigen der gewinnenden Anzeige in einem `<fencedframe>` verwendet wird:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird die resultierende {{jsxref("Promise")}} in eine opake [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), die nur in einem `<iframe>` verwendet werden kann.

So oder so speichert der Browser eine URL, die den Zielort der einzubettenden Inhalte enthält — entweder zur opaken URN oder zur internen `url`-Eigenschaft des `FencedFrameConfig` gemappt. Der URL-Wert kann von JavaScript, das im einbettenden Kontext ausgeführt wird, nicht gelesen werden.

> [!NOTE]
> Unterstützung für opake URNs in `<iframe>`s wird bereitgestellt, um die Migration vorhandener Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu erleichtern. Diese Unterstützung ist als vorübergehend gedacht und wird mit zunehmendem Einsatz entfernt werden.

> **Hinweis:** `FencedFrameConfig` verfügt über eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten vom einbettenden Dokument in den gemeinsamen Speicher des `<fencedframe>` zu übergeben. Sie könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` zugänglich sein und zur Erstellung eines Berichts verwendet werden. Siehe die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) für weitere Details.

### Zugriff auf die fenced frame Funktionalität auf dem `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere speziell für die Fenced Frame API relevante Funktionen. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichts-Daten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s vorgesehen sind, können über festgelegte Berechtigungspolicen aktiviert werden; andere politisch kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolicen, die für fenced frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>`s kommen, einschließlich Kinder-`<iframe>`s, die in einem `<fencedframe>` eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Response-Header mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder ein `<iframe>`, das innerhalb eines `<fencedframe>`s eingebettet ist, geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Auswirkungen von fenced frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind innerhalb fenced frames nicht verfügbar, da sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Permissions_Policy)-Delegation basieren, die zum Datenleak verwendet werden könnte.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte, die von innerhalb fenced frames geöffnet werden, durchgesetzt, da diese andernfalls verwendet werden könnten, um Informationen an andere Ursprünge zu leaken. Jedes neue Fenster, das von innerhalb eines fenced frames geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte, die in `<fencedframe>`-Elemente geladen werden, anzugeben.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von fenced frames geerbt werden, um Datenschutzprobleme zu mildern. Für das Laden eines fenced frames müssen Sie entweder keine `sandbox`-CSP festlegen (was die unten genannten Werte impliziert) oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden auf fenced frames nicht ausgelöst, da sie Informationen in Form eines Seitenlöschungszeitstempels leaken können. Implementierungen zielen darauf ab, potenzielle Datenleaks so weit wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welche Inhalte darin angezeigt werden. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die fenced frame-Funktionalität relevant sind. Nur für Dokumente verfügbar, die in einem `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zur Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der zu einer gegebenen opaken URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` gemappten URL.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentenkontext zurück. Nur für Dokumente verfügbar, die in einem `<fencedframe>` eingebettet sind.

## Anmeldung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erzeugen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einem [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) anmelden. Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame-Code trotzdem lokal testen, ohne eine Anmeldung durchzuführen. Aktivieren Sie dazu das folgende Chrome-Entwickler-Flag für das lokale Testen:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos nutzen alle `<fencedframe>`s:

- [Shared Storage API-Demos](https://shared-storage-demo.web.app/) (die auch einige Beispiele für die Private Aggregation API enthalten)
- [Protected Audience API-Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
