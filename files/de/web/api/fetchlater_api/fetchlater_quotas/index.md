---
title: fetchLater() Quoten
slug: Web/API/fetchLater_API/fetchLater_quotas
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Aufgeschobene Abrufe der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) werden gesammelt und gesendet, sobald der Tab geschlossen wird. Zu diesem Zeitpunkt gibt es keine Möglichkeit für den Benutzer, sie abzubrechen. Um Situationen zu vermeiden, in denen Dokumente dieses Bandbreite missbrauchen, um unbegrenzt Daten über das Netzwerk zu senden, setzt die API Quoten, wie viel Daten später gesendet werden können.

Diese Quoten können durch die {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Richtlinien verwaltet werden.

## Übersicht

Die Gesamtquote für `fetchLater()` beträgt 640KiB pro Dokument. Standardmäßig teilt sich dies in eine 512KiB-Top-Level-Quote und eine 128KiB-gemeinsame Quote auf:

- Die 512KiB-Top-Level-Quote ist standardmäßig für alle `fetchLater()`-Anfragen aus dem Top-Level-Dokument und direkten Subframes mit demselben Ursprung.
- Die 128KiB-gemeinsame Quote ist standardmäßig für alle `fetchLater()`-Anfragen in Cross-Origin-Subframes (zum Beispiel `<iframe>`, `<object>`, `<embed>` und `<frame>`-Elemente).

`fetchLater()`-Anfragen können an jede URL gestellt werden und sind nicht auf denselben Ursprung wie das Dokument oder das Subframe beschränkt. Daher ist es wichtig, zwischen Anfragen im Top-Level-Dokumentinhalt (zu Ursprüngen erster oder dritter Parteien) und denen in Subframes zu unterscheiden.

Beispielsweise, wenn ein Top-Level-`a.com`-Dokument ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` stellt, wäre diese Anfrage durch das 512KiB-Limit des Top-Levels begrenzt. Alternativ, wenn das Top-Level-Dokument ein `<iframe>` mit `analytics.example.com` einbettet, das eine `fetchLater()`-Anfrage stellt, wäre diese Anfrage durch das 128KiB-Limit begrenzt.

## Quotenlimits nach Meldungsursprung und Subframe

Nur 64KiB der 512KiB-Top-Level-Quote können gleichzeitig für denselben Meldungsursprung (der Ursprungs-URL der Anfrage) verwendet werden. Dies verhindert, dass Drittanbieter-Bibliotheken opportunistisch Quoten reservieren, bevor sie Daten zu senden haben.

Jedes Cross-Origin-Subframe erhält standardmäßig 8KiB aus der gemeinsamen 128KiB-Quote, die zugewiesen wird, wenn das Subframe dem DOM hinzugefügt wird (unabhängig davon, ob `fetchLater()` in diesem Subframe verwendet wird oder nicht). Dies bedeutet, dass im Allgemeinen nur die ersten 16 Cross-Origin-Subframes, die einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie die 128KiB-Quote verbrauchen.

## Erhöhung der Subframe-Quoten durch Teilen der Top-Level-Quote

Der Top-Level-Ursprung kann ausgewählten Cross-Origin-Subframes eine erhöhte Quote von 64KiB geben, die aus dem größeren 512KiB-Top-Level-Limit genommen wird. Dies geschieht durch das Auflisten dieser Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permissions Policy-Richtlinie. Dies wird zugewiesen, wenn das Subframe dem DOM hinzugefügt wird, was weniger Quote für das Top-Level-Dokument und direkte gleich-ursprüngliche Subframes übriglässt. Mehrere gleich-ursprüngige Subdomains können jeweils eine 64KiB-Quote erhalten.

## Einschränken der gemeinsamen Quote

Der Top-Level-Ursprung kann auch die 128KiB-gemeinsame Quote auf benannte Cross-Origin-Subframes beschränken, indem er diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy auflistet. Er kann auch die gesamte 128KiB-Standardsubframe-Quote widerrufen und stattdessen die volle 640KiB-Quote für sich selbst und benannte `deferred-fetch`-Cross-Origin behalten, indem er die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy auf `()` setzt.

## Delegation von Quoten an Subframes von Subframes

Standardmäßig erhalten Subframes von Subframes keine Quote und können daher `fetchLater()` nicht verwenden. Subframes, denen die erhöhte 64KiB-Quote zugewiesen wurde, können die volle 64KiB-Quote an weitere Subframes delegieren und ihnen die Verwendung von `fetchLater()` ermöglichen, indem sie ihre eigene `deferred-fetch` Permissions Policy setzen. Sie können nur ihre volle Quote an weitere Subframes delegieren, nicht Teile davon, und können keine neuen Quoten festlegen. Subframes, die die minimale 8KiB-Quote verwenden, können Quoten nicht an Subframes delegieren. Um Quoten zugeordnet zu bekommen, müssen Sub-Subframes sowohl in den Top-Level- als auch in den Subframe-`deferred-fetch` {{httpheader('Permissions-Policy')}}-Richtlinien enthalten sein.

## Wenn Quoten überschritten werden

Wenn Quoten überschritten werden, wird ein `QuotaExceededError` ausgelöst, wenn die Methode [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) aufgerufen wird, um die aufgeschobene Anfrage zu initiieren.

Permissions Policy-Prüfungen sind von Quotenprüfungen nicht zu unterscheiden. Ein Aufruf von `fetchLater()` löst sowohl dann einen `QuotaExceededError` aus, wenn die Quote tatsächlich überschritten wurde, als auch wenn die Quote über eine Permissions Policy für diesen Ursprung eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensive Programmierung berücksichtigen und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

## Beispiele

### Verwenden der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64KiB, wenn es dem Top-Level-Dokument hinzugefügt wird, aus der 512KiB-Grenze des Top-Levels.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgelistet und erhält daher 8KiB, wenn es dem Top-Level-Dokument aus dem 128KiB-geteilten Limit hinzugefügt wird.
3. Weitere 15 Cross-Origin-Iframes würden jeweils 8KiB erhalten, wenn sie dem Top-Level-Dokument hinzugefügt werden (ähnlich wie `c.com`).
4. Das nächste Cross-Origin-Iframe würde keine Quote erhalten.
5. Wenn eines der Cross-Origin-Iframes entfernt wird, werden die aufgeschobenen Abrufe gesendet.
6. Das nächste Cross-Origin-Iframe _würde_ eine 8KiB-Quote erhalten, da wieder eine Quote verfügbar ist.

### Einschränken der minimalen Quote auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält keine Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine gleich-ursprünglichen Nachkommen können bis zu 512KiB verwenden.

### Die minimale Quote vollständig mit Top-Level-Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält keine Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine gleich-ursprünglichen Nachkommen können bis zu volle 640KiB verwenden, aber das reduziert sich auf 574KiB, wenn ein `b.com` Subframe erstellt wird (oder noch weniger, wenn mehrere `b.com` Subframes erstellt werden, von denen jedes eine 64KiB-Quote zugewiesen bekommt).

### Die minimale Quote vollständig ohne Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Top-Level-Dokument und seine gleich-ursprünglichen Nachkommen können die vollen 640KiB verwenden.
2. Subframes erhalten keine Quote und können `fetchLater()` nicht verwenden.

### Gleichursprungs-Subframes teilen die Quote mit dem Top-Level und können an Subframes delegieren

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein Subframe von `a.com` einbettet, das ein Subframe von `b.com` einbettet, ohne explizite Berechtigungsrichtlinien.

1. Das Top-Level-Dokument von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://a.com/embed">` teilt die 512KiB-Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. `<iframe src="https://b.com/embed">` erhält eine 8KiB-Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.

### Gleichursprungs-Subframes können die Quote nicht mit dem Top-Level teilen, wenn sie durch ein Cross-Origin-Subframe getrennt werden

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein Subframe von `<iframe src="https://a.com/embed">` einbettet, ohne explizite Berechtigungsrichtlinien.

1. Das Top-Level-Dokument von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` teilt die 8KiB-Quote.
3. `<iframe src="https://a.com/embed">` erhält keine Quote; auch wenn dies gleichursprünglich mit dem Top-Ursprung ist, wird es durch ein Cross-Origin getrennt.

### Sekundäre Subframes von Subframes erhalten standardmäßig keine Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet, ohne explizite Berechtigungsrichtlinien.

1. Der Top-Level-Frame von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der Standard-gemeinsamen Quote.
3. `<iframe src="https://c.com/">` erhält keine Quote.

### Zuweisen der vollen Quote an ein weiteres Subframe

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet.

Angenommen, `a.com` hat die folgende Permissions Policy:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und, angenommen, `b.com` hat die folgende Permissions Policy:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Top-Level-Frame von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 64KiB der Standard-Quote.
3. `<iframe src="https://b.com/">` delegiert seine gesamte Quote von 8KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8KiB an Quote.

### Umleitungen übertragen keine Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das auf `c.com` umleitet, ohne explizite Top-Level-Berechtigungsrichtlinien.

1. Der Top-Level-Frame von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der Standard-gemeinsamen Quote.
3. Die 8KiB wird nicht an `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber die 8KiB werden nicht freigegeben.

### Umleitungen von Subframes zurück zum Top-Level-Ursprung erlauben die Nutzung der Top-Level-Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das auf `a.com` umleitet, ohne explizite Top-Level-Berechtigungsrichtlinien.

1. Der Top-Level-Frame von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der Standard-gemeinsamen Quote.
3. Die 8KiB wird nicht an `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber es kann erneut die volle Top-Level-Quote teilen, und die 8KiB werden freigegeben.

### Beispiele, die einen `QuotaExceededError` auslösen

```js
// Maximum of 64KiB per origin
fetchLater(a_72_kb_url);

// Maximum of 64KiB per origin including headers
fetchLater("https://origin.example.com", { headers: headers_exceeding_64kb });

// Maximum of 64KiB per origin including body and headers
fetchLater(a_32_kib_url, { headers: headers_exceeding_32kib });

// Maximum of 64KiB per origin including body
fetchLater("https://origin.example.com", {
  method: "POST",
  body: body_exceeding_64_kib,
});

// Maximum of 64KiB per origin including body and automatically added headers
fetchLater(a_62_kib_url /* with a 3kb referrer */);
```

### Beispiele, die schließlich einen `QuotaExceededError` auslösen

In der folgenden Sequenz, die im Top-Level-Dokument enthalten ist, würden die ersten beiden Anfragen erfolgreich sein, aber die dritte würde auslösen. Denn, obwohl die Gesamt-640KiB-Quote nicht überschritten wurde, übersteigt die dritte Anfrage die Reporting-Origin-Quote für `https://a.example.com` und würde auslösen.

```js
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://b.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
