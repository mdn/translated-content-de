---
title: Verwenden von Deferred Fetch
slug: Web/API/Fetch_API/Using_Deferred_Fetch
l10n:
  sourceCommit: a417ab306b1c4c675959ff77be5f685bf991e3ae
---

{{DefaultAPISidebar("Fetch API")}}

Die **`fetchLater()`-API** stellt eine Schnittstelle bereit, um einen verzögerten Abruf anzufordern, der nach einem festgelegten Zeitraum oder wenn die Seite geschlossen oder navigiert wurde, gesendet werden kann.

## Überblick

Entwickler müssen oft Daten zurück an den Server senden (oder signalisieren), insbesondere am Ende eines Besuchs eines Benutzers auf einer Seite — zum Beispiel für Analysedienste. Dafür gibt es mehrere Wege: vom Hinzufügen von ein-Pixel-großen {{HTMLElement("img")}}-Elementen zur Seite, über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), bis hin zur dedizierten [Beacon-API](/de/docs/Web/API/Beacon_API) und der [Fetch-API](/de/docs/Web/API/Fetch_API) selbst.

Das Problem ist jedoch, dass alle diese Methoden bei der Zuverlässigkeit für Signalisierung am Ende des Besuchs Schwächen aufweisen. Während die Beacon-API und die [`keepalive`](/de/docs/Web/API/Request/keepalive)-Eigenschaft der Fetch-API Daten senden, selbst wenn das Dokument zerstört wird (so gut es in dieser Situation geht), löst dies nur einen Teil des Problems.

Der andere — schwierigere — Teil besteht darin, zu entscheiden, _wann_ die Daten gesendet werden sollen, da es keinen idealen Zeitpunkt im Lebenszyklus einer Seite gibt, um den JavaScript-Aufruf zum Senden des Beacons zu machen:

- Die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) sind unzuverlässig und werden von mehreren großen Browsern ignoriert.
- Die Ereignisse [`pagehide`](/de/docs/Web/API/Window/pagehide_event) und [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) sind zuverlässiger, haben jedoch auf Mobilplattformen immer noch Probleme.

Das bedeutet, dass Entwickler, die Daten zuverlässig über ein Beacon senden möchten, dies häufiger tun müssen als ideal wäre. Zum Beispiel könnten sie ein Beacon bei jeder Änderung senden, selbst wenn der endgültige Wert für die Seite noch nicht erreicht wurde. Dies hat Kosten in der Netzwerknutzung, Serververarbeitung und dem Zusammenführen oder Verwerfen veralteter Beacons auf dem Server.

Alternativ können Entwickler entscheiden, ein gewisses Maß an fehlenden Daten zu akzeptieren — entweder durch:

- Beaconing nach einer bestimmten Cut-off-Zeit und das spätere Sammeln von Daten zu unterlassen.
- Beaconing am Ende des Seitenlebenszyklus, aber zu akzeptieren, dass dies manchmal nicht zuverlässig sein wird.

Die `fetchLater()`-API erweitert die [Fetch-API](/de/docs/Web/API/Fetch_API), um das Einrichten von Abrufanfragen im Voraus zu ermöglichen. Diese verzögerten Abrufe können aktualisiert werden, bevor sie gesendet wurden, sodass die Nutzlast die neuesten Daten widerspiegelt, die gesendet werden sollen.

Der Browser sendet dann das Beacon, wenn der Tab geschlossen oder navigiert wird, oder nach einer festgelegten Zeitspanne, falls angegeben. Dies vermeidet das Senden mehrerer Beacons, stellt jedoch dennoch ein zuverlässiges Beacon innerhalb vernünftiger Erwartungen sicher (d.h. ausgenommen, wenn der Browserprozess während eines Absturzes unerwartet beendet wird).

Verzögerte Abrufe können auch mit einem [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, wenn sie nicht mehr benötigt werden, um weitere unnötige Kosten zu vermeiden.

## Quoten

Verzögerte Abrufe werden gesammelt und gesendet, sobald der Tab geschlossen wird; in diesem Moment gibt es keine Möglichkeit für den Benutzer, sie abzubrechen. Um Situationen zu vermeiden, in denen Dokumente diese Bandbreite missbrauchen, um unbegrenzte Datenmengen über das Netzwerk zu senden, wird die Gesamtquote für ein Top-Level-Dokument auf 640 KiB begrenzt.

Aufrufer von `fetchLater()` sollten defensiv sein und in fast allen Fällen `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

Da diese Beschränkung die Bandbreite für verzögerte Abrufe zu einer knappen Ressource macht, die zwischen mehreren Meldungs-Ursprüngen (beispielsweise mehreren RUM-Bibliotheken) und Unterrahmen aus mehreren Ursprüngen aufgeteilt werden muss, bietet die Plattform eine vernünftige Standardaufteilung dieser Quote. Darüber hinaus bietet sie {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktiven, um eine andere Aufteilung bei Bedarf zu ermöglichen.

Die Gesamtquote für `fetchLater()` beträgt 640 KiB pro Dokument. Standardmäßig ist diese in eine 512 KiB Top-Level-Quote und eine 128 KiB geteilte Quote aufgeteilt:

- Die 512 KiB Top-Level-Quote ist standardmäßig für alle `fetchLater()`-Anfragen reserviert, die vom Top-Level-Dokument und direkten Unterrahmen gemacht werden, die diesen Ursprung verwenden.
- Die 128 KiB geteilte Quote ist standardmäßig für alle `fetchLater()`-Anfragen reserviert, die in Cross-Origin-Unterrahmen gemacht werden (z. B. `<iframe>`, `<object>`, `<embed>` und `<frame>`-Elemente).

`fetchLater()`-Anfragen können an jede URL gesendet werden und sind nicht auf denselben Ursprung wie das Dokument oder den Unterrahmen beschränkt, daher ist es wichtig zu unterscheiden zwischen Anfragen, die im Top-Level-Dokumentinhalt (ob für ursprungsfremde oder erste Partei) und solche, die in Unterrahmen gemacht werden.

Zum Beispiel, wenn ein Top-Level-`a.com`-Dokument ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` macht, wäre diese Anfrage durch das Top-Level-Limit von 512 KiB eingeschränkt. Andersherum, wenn das Top-Level-Dokument ein `<iframe>` mit einer Quelle von `analytics.example.com` einbettet, das eine `fetchLater()`-Anfrage macht, wäre diese Anfrage durch das 128 KiB-Limit eingeschränkt.

### Quotengrenzen nach Meldungs-Ursprung und Unterrahmen

Nur 64 KiB der Top-Level-512 KiB-Quote können gleichzeitig für denselben Meldungs-Ursprung (den Ursprung der Anforderungs-URL) genutzt werden. Dies verhindert, dass Drittanbieter-Bibliotheken Quoten opportunistisch reservieren, bevor sie Daten zu senden haben.

Jeder Cross-Origin-Unterrahmen erhält standardmäßig eine 8 KiB-Quote aus der geteilten 128 KiB-Quote, die zugeteilt wird, wenn der Unterrahmen dem DOM hinzugefügt wird (ob `fetchLater()` in diesem Unterrahmen verwendet wird oder nicht). Dies bedeutet, dass im Allgemeinen nur die ersten 16 Cross-Origin-Unterrahmen auf einer Seite `fetchLater()` verwenden können, da sie die 128 KiB-Quote ausschöpfen.

### Erhöhung der Unterrahmenquoten durch Teilen der Top-Level-Quote

Der Top-Level-Ursprung kann ausgewählten Cross-Origin-Unterrahmen eine erhöhte Quote von 64 KiB gewähren, die aus dem größeren Top-Level-512 KiB-Limit genommen wird. Dies geschieht, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}-Berechtigungsrichtlinie aufgelistet werden. Dies wird zugeteilt, wenn der Unterrahmen dem DOM hinzugefügt wird, und hinterlässt weniger Quote für das Top-Level-Dokument und direkte gleiche Ursprungsrahmen. Mehrere gleiche Ursprungs-Subdomains können jeweils eine 64 KiB-Quote erhalten.

### Einschränkung der geteilten Quote

Der Top-Level-Ursprung kann auch die 128 KiB-geteilte Quote auf benannte Cross-Origin-Unterrahmen beschränken, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}-Berechtigungsrichtlinie aufgelistet werden. Es kann auch die gesamte 128 KiB Standardunterrahmenquote widerrufen und stattdessen die volle 640 KiB-Quote für sich selbst und alle benannten `deferred-fetch`-Cross-Ursprünge behalten, indem die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}-Berechtigungsrichtlinie auf `()` gesetzt wird.

### Quoten an Unterrahmen von Unterrahmen delegieren

Standardmäßig werden Unterrahmen von Unterrahmen keine Quote zugewiesen und können somit `fetchLater()` nicht verwenden. Unterrahmen, die die erhöhte 64 KiB-Quote erhalten, können die volle 64 KiB-Quote an weitere Unterrahmen delegieren und ihnen die Verwendung von `fetchLater()` erlauben, indem sie ihre eigene `deferred-fetch`-Berechtigungsrichtlinie setzen. Sie können ihre volle Quote nur auf weitere Unterrahmen und nicht nur Teile davon delegieren und können keine neuen Quoten festlegen. Unterrahmen, die die minimale 8 KiB-Quote verwenden, können keine Quoten an Unterrahmen delegieren. Um eine Quote zu erhalten, müssen Sub-Subrahmen sowohl im Top-Level- als auch im Unterrahmen `deferred-fetch`-{{httpheader('Permissions-Policy')}}-Direktiven enthalten sein.

### Wenn Quoten überschritten werden

Wenn Quoten überschritten werden, wird ein `QuotaExceededError` geworfen, wenn die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater)-Methode aufgerufen wird, um den verzögerten Abruf zu initiieren.

Berechtigungsrichtlinienprüfungen sind von Quotenüberprüfungen nicht unterscheidbar. Das Aufrufen von `fetchLater()` wird einen `QuotaExceededError` sowohl dann werfen, wenn die Quote tatsächlich überschritten wurde als auch wenn die Quote für diesen Ursprung über eine Berechtigungsrichtlinie eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensiv sein und in fast allen Fällen `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

## Quotenbeispiele

### Ausschöpfen der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird, aus dem Top-Level 512 KiB Limit.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgelistet und erhält somit 8 KiB, wenn es dem Top-Level-Dokument aus dem geteilten 128 KiB-Limit hinzugefügt wird.
3. 15 weitere Cross-Origin-Iframes würden jeweils 8 KiB erhalten, wenn sie dem Top-Level-Dokument hinzugefügt werden (ähnlich wie `c.com`).
4. Das nächste Cross-Origin-Iframe würde keine Quote erhalten.
5. Wenn eines der Cross-Origin-Iframes entfernt wird, werden seine verzögerten Abrufe gesendet.
6. Das nächste Cross-Origin-Iframe _würde_ eine 8 KiB-Quote erhalten, da wieder eine Quote verfügbar ist.

### Widerrufen der Begrenzung der minimalen Quote auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 8 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. Ein `<iframe src="https://c.com/page">` erhält keine Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine same-origin Nachkommen können bis zu 512 KiB verwenden.

### Vollständiger Widerruf der minimalen Quote mit Top-Level-Ausnahmen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein `<iframe src="https://b.com/page">` erhält 64 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. Ein `<iframe src="https://c.com/page">` erhält keine Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine same-origin Nachkommen können bis zu volle 640 KiB verwenden, das jedoch auf 574 KiB reduziert wird, wenn ein `b.com`-Subrahmen erstellt wird (oder noch weniger, wenn mehrere `b.com`-Subrahmen erstellt werden, von denen jeder eine 64 KiB-Quote erhält).

### Vollständiger Widerruf der minimalen Quote ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Top-Level-Dokument und seine same-origin Nachkommen können die volle 640 KiB nutzen.
2. Unterrahmen wird keine Quote zugewiesen und können `fetchLater()` nicht verwenden.

### Same-origin Unterrahmen teilen sich die Quote mit dem Top-Level und können an Unterrahmen delegieren

Angenommen, ein Top-Level-Dokument auf `a.com`, das einen Unterrahmen von `a.com` einbettet, der einen Unterrahmen von `b.com` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Top-Level-Dokument von `a.com` hat die Standard-512 KiB-Quote.
2. `<iframe src="https://a.com/embed">` teilt die 512 KiB-Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. `<iframe src="https://b.com/embed">` erhält eine 8 KiB-Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.

### Same-origin Unterrahmen können keine Quote mit dem Top-Level teilen, wenn sie von einem Cross-Origin-Unterrahmen getrennt sind

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das einen Unterrahmen von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Top-Level-Dokument von `a.com` hat die Standard-512 KiB-Quote.
2. `<iframe src="https://b.com/">` teilt die 8 KiB-Quote.
3. `<iframe src="https://a.com/embed">` erhält keine Quote; selbst wenn dies same-origin mit dem Top-Ursprung ist, wird es von einem Cross-Origin getrennt.

### Sekundäre Unterrahmen von Unterrahmen erhalten standardmäßig keine Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512 KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8 KiB der Standard-geteilten Quote.
3. `<iframe src="https://c.com/">` erhält keine Quote.

### Gewähren der vollen Quote an einen weiteren Unterrahmen

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet.

Angenommen, `a.com` hat die folgende Berechtigungsrichtlinie:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und, angenommen, `b.com` hat die folgende Berechtigungsrichtlinie:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512 KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 64 KiB der Standardquote.
3. `<iframe src="https://b.com/">` delegiert seine volle Quote von 8 KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8 KiB der Quote.

### Weiterleitungen übertragen keine Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `c.com` weiterleitet, und keine expliziten Top-Level-Berechtigungsrichtlinien.

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512 KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8 KiB der Standard-geteilten Quote.
3. Die 8 KiB werden nicht an `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin weiterleitet, aber die 8 KiB werden nicht freigegeben.

### Sandboxed same-origin Iframes sind effektiv separate Ursprünge

Zum Beispiel, wenn das folgende `<iframe>` auf `https://www.example.com` eingebettet wird:

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

Dies würde nicht als "same-origin" betrachtet werden, obwohl es auf demselben Ursprung wie das Top-Level-Dokument gehostet wird, da das `<iframe>` in einer Sandbox-Umgebung ist. Daher sollte es standardmäßig eine 8 KiB-Quote aus der gesamten geteilten 128 KiB-Quote zugewiesen werden.

### `fetchLater()` von Iframes nicht erlauben

Sie können das `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut verwenden, um zu verhindern, dass `fetchLater()`-Quoten dem `<iframe>` zugewiesen werden:

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

Die `allow="deferred-fetch"`-Direktive wird benötigt, um zu verhindern, dass same-origin Iframes die 512 KiB-Quote nutzen, und die `allow="deferred-fetch-minimal"`-Direktive wird benötigt, um zu verhindern, dass cross-origin Iframes die 128 KiB-Quote nutzen. Durch das Einschließen beider Direktiven werden beide Quoten unabhängig vom `src`-Wert nicht genutzt.

### Beispiele, die einen `QuotaExceededError` werfen

```js
// Maximum of 64KiB per origin
const url = "<72KiB of characters>";
fetchLater(url);

// Maximum of 64KiB per origin including headers
fetchLater("https://origin.example.com", { headers: headersExceeding64KiB });

// Maximum of 64KiB per origin including body and headers
fetchLater("<32KiB of characters>", { headers: headersExceeding32KiB });

// Maximum of 64KiB per origin including body
fetchLater("https://origin.example.com", {
  method: "POST",
  body: bodyExceeding64KiB,
});

// Maximum of 64KiB per origin including body and automatically added headers
fetchLater("<62KiB of characters>" /* with a 3kb referrer */);
```

### Beispiele, die schließlich einen `QuotaExceededError` werfen

In der folgenden Sequenz, die im Top-Level-Dokument enthalten ist, würden die ersten beiden Anfragen erfolgreich sein, aber die dritte würde einen Fehler werfen. Das liegt daran, dass, selbst wenn die gesamte 640 KiB-Quote nicht überschritten wurde, die dritte Anfrage das Meldungsursprungs-Limit für `https://a.example.com` überschreitet und einen Fehler werfen würde.

```js
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://b.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
```

### Weiterleitungen von Unterrahmen zurück zum Top-Level-Ursprung erlauben die Nutzung der Top-Level-Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das `<iframe src="https://b.com/">` einbettet, das zu `a.com` weiterleitet, und keine expliziten Top-Level-Berechtigungsrichtlinien:

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512 KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8 KiB der Standard-geteilten Quote von 128 KiB.
3. Die 8 KiB werden nicht an `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin weiterleitet, aber es kann wieder die volle Top-Level-Quote teilen, und die zuvor zugewiesene 8 KiB-Quote wird freigegeben.
