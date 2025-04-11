---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine Hauptquelle für [Privacy](/de/docs/Web/Privacy)- und [Security](/de/docs/Web/Security)-Probleme im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die genutzt werden können, um Informationen zu teilen und Benutzer über Websites hinweg zu verfolgen. Darüber hinaus kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel durch die Nutzung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Formen von Informationen aus dem `<iframe>` zu lesen — zum Beispiel können Sie erhebliche Tracking/Fingerprinting-Daten durch das Lesen der eingebetteten URL aus der `src`-Eigenschaft erhalten, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontexts zugreifen, und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, sodass Cookie-Daten nicht mehr zum Tracking genutzt werden können (siehe zum Beispiel [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind `<iframe>`s in Form und Funktion sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite nicht geteilt werden kann.
- Ein `<fencedframe>` auf cross-site Daten zugreifen kann, jedoch nur in einem sehr spezifischen Satz von kontrollierten Umständen, die die Privatsphäre der Nutzer bewahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripterstellung accessed werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von fenced frames lesen Sie den [Leitfaden Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von cross-site Inhalten einzubetten oder Daten zu sammeln und dadurch unterschiedliche Anwendungsfälle auf eine datenschutzfreundliche Weise zu erfüllen. Die meisten davon haben zuvor auf Drittanbieter-Cookies oder andere Mechanismen zurückgegriffen, die schlecht für die Privatsphäre waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) ermöglicht den Zugriff auf nicht partitionierte cross-site Daten in einer sicheren Umgebung, um Ergebnisse zu berechnen und/oder anzuzeigen in einem `<fencedframe>`. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf schalten, welche Benutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen und einem Benutzer Varianten basierend auf einer Gruppe anzeigen, der er zugewiesen ist, oder basierend darauf, wie viele Benutzer jede bereits gesehen haben.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was sie auf anderen Websites gesehen haben. Wenn sie zum Beispiel bereits eine Mitgliedschaft erworben haben, sollten Sie ihnen möglicherweise keine Mitgliedschafts-Anzeigen auf Ihren anderen Seiten zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht Entwicklern, interessensbasierte Gruppenwerbung wie Remarketing und benutzerdefinierte Zielgruppenanwendungsfälle zu implementieren. Sie kann mehrere Gebote für Werbeflächen bewerten und die Gewinnanzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten von `<fencedframe>`s (ursprünglich aus dem Shared Storage oder der Protected Audience API) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, steuern Sie den Inhalt, der in einem {{htmlelement("fencedframe")}} eingebettet wird, nicht direkt über ein reguläres Skript.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann über JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Werbeauktion der Protected Audience API, die dann verwendet wird, um die Gewinnanzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Beim `runAdAuction()`-Aufruf muss `resolveToConfig: true` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird die resultierende {{jsxref("Promise")}} zu einer undurchsichtigen [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), die nur in einem `<iframe>` verwendet werden kann.

In beiden Fällen speichert der Browser eine URL, die den Zielort der zu bettenden Inhalte enthält — entweder der undurchsichtigen URN zugeordnet oder der internen `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann nicht von JavaScript im einbettenden Kontext gelesen werden.

> [!NOTE]
> Es wird Unterstützung für undurchsichtige URNs in `<iframe>`s angeboten, um die Migration bestehender Implementierungen auf [Privacy Sandbox](https://privacysandbox.google.com/)-APIs zu erleichtern. Diese Unterstützung ist als vorübergehend gedacht und wird in Zukunft entfernt, wenn die Akzeptanz zunimmt.

> **Hinweis:** `FencedFrameConfig` hat eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument an den gemeinsamen Speicher des `<fencedframe>` zu übergeben. Es könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und zur Erstellung eines Berichts verwendet werden. Siehe die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) für weitere Details.

### Zugriff auf fenced frame Funktionalität auf dem `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der fenced frame API relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, das Absenden von Berichterstattungsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolicy

Nur spezifische Funktionen, die zur Verwendung in `<fencedframe>`s vorgesehen sind, können über Berechtigungspolicies aktiviert werden, die auf ihnen festgelegt werden; andere policy-gesteuerte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Verfügbare Berechtigungspolicies für fenced frames](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>` gemacht werden, einschließlich untergeordneter `<iframe>`s, die in einem `<fencedframe>` eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` setzen, für jedes Dokument, das in ein `<fencedframe>` oder `<iframe>` eingebettet werden soll, das sich innerhalb eines `<fencedframe>` befindet.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von fenced frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von fenced frames nicht verfügbar, da sie auf [permissions policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation angewiesen sind, die verwendet werden könnte, um Daten zu leaken.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden für neue Browsing-Kontexte durchgesetzt, die aus fenced frames geöffnet werden, da sie sonst verwendet werden könnten, um Informationen an andere Ursprünge zu leaken. Jedes neue Fenster, das aus einem fenced frame geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elementen geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) benutzerdefinierte Einstellungen können nicht von fenced frames geerbt werden, um Privacy-Probleme zu entschärfen. Für einen fenced frame, um geladen zu werden, müssen Sie entweder keine `sandbox`-CSP (was die unten stehenden Werte impliziert) spezifizieren oder die folgenden Sandbox-Werte festlegen:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden bei fenced frames nicht ausgelöst, da sie Informationen in Form eines Seitendeletionszeitstempels leaken können. Implementierungen zielen darauf ab, so viele potenzielle Leaks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welche Inhalte in diesem angezeigt werden. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) festgelegt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere für fenced frame Funktionalität relevante Funktionen. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zur Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt spezifische Strings innerhalb der zu einer gegebenen undurchsichtigen URN oder dem internen `url`-Eigenschaft eines `FencedFrameConfig` zugeordneten URL.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.

## Einschreibung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern es, dass Sie Ihre Website in einem [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) registrieren. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame Code trotzdem lokal testen, ohne Registrierung. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos nutzen alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (welche auch einige Private Aggregation API-Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
