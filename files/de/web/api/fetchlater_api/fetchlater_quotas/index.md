---
title: fetchLater() Quoten
slug: Web/API/fetchLater_API/fetchLater_quotas
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Zurückgestellte Abrufe der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) werden gesammelt und gesendet, sobald der Tab geschlossen wird. Zu diesem Zeitpunkt gibt es keine Möglichkeit für den Benutzer, diese abzubrechen. Um Situationen zu vermeiden, in denen Dokumente durch den unbegrenzten Versand von Daten über das Netzwerk die Bandbreite missbrauchen, setzt die API Quoten, wie viele Daten aufgeschoben werden können.

Diese Quoten können durch die Direktiven {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwaltet werden.

## Überblick

Die Gesamtquote für `fetchLater()` beträgt 640KiB pro Dokument. Standardmäßig ist sie in eine 512KiB-Top-Level-Quote und eine geteilte 128KiB-Quote aufgeteilt:

- Die 512KiB-Top-Level-Quote ist standardmäßig für alle `fetchLater()`-Anfragen vorgesehen, die vom Top-Level-Dokument und direkten Unterrahmen mit dieser Herkunft gemacht werden.
- Die 128KiB geteilte Quote ist standardmäßig für alle `fetchLater()`-Anfragen vorgesehen, die in cross-origin Unterrahmen gemacht werden (zum Beispiel `<iframe>`, `<object>`, `<embed>` und `<frame>` Elemente).

`fetchLater()`-Anfragen können an jede URL gestellt werden und sind nicht auf den gleichen Ursprung wie das Dokument oder den Unterrahmen beschränkt, daher ist es wichtig, zwischen Anfragen im Top-Level-Dokumentinhalt (ob zu First-Party- oder Third-Party-Ursprüngen) und solchen, die in Unterrahmen gemacht werden, zu unterscheiden.

Zum Beispiel, wenn ein Top-Level `a.com` Dokument ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` stellt, würde diese Anfrage durch das Top-Level 512KiB-Limit begrenzt. Alternativ, wenn das Top-Level-Dokument ein `<iframe>` mit einer Quelle `analytics.example.com` einbettet, das eine `fetchLater()`-Anfrage stellt, wäre diese Anfrage durch das 128KiB-Limit begrenzt.

## Quotenlimits nach Berichtsursprung und Unterrahmen

Nur 64KiB der 512KiB-Top-Level-Quote können gleichzeitig für den gleichen Berichtsursprung (den Ursprung der Anforderungs-URL) verwendet werden. Dies verhindert, dass Drittanbieter-Bibliotheken opportunistisch Quote reservieren, bevor sie Daten zu senden haben.

Jeder cross-origin Unterrahmen bekommt eine 8KiB Quote aus der geteilten 128KiB-Quote standardmäßig, die zugewiesen wird, wenn der Unterrahmen zum DOM hinzugefügt wird (unabhängig davon, ob `fetchLater()` in diesem Unterrahmen verwendet wird oder nicht). Dies bedeutet, dass generell nur die ersten 16 cross-origin Unterrahmen, die zu einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie die 128KiB-Quote aufbrauchen.

## Erhöhung der Unterrahmen-Quoten durch Teilen der Top-Level-Quote

Der Top-Level-Ursprung kann ausgewählten cross-origin Unterrahmen eine erhöhte Quote von 64KiB geben, die aus der größeren 512KiB Top-Level-Quote entnommen wird. Dies geschieht, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Berechtigungsrichtlinie aufgeführt werden. Diese wird zugewiesen, wenn der Unterrahmen dem DOM hinzugefügt wird, was weniger Quote für das Top-Level-Dokument und direkte gleich-origin Unterrahmen hinterlässt. Mehrere gleich-origin Unterdomänen können jeweils eine 64KiB-Quote erhalten.

## Beschränkung der gemeinsamen Quote

Der Top-Level-Ursprung kann auch die 128KiB gemeinsame Quote auf benannte cross-origin Unterrahmen beschränken, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Berechtigungsrichtlinie aufgelistet werden. Er kann auch die gesamte 128KiB-Standard-Unterrahmen-Quote widerrufen und stattdessen die volle 640KiB-Quote für sich selbst und alle benannten `deferred-fetch` Cross-Origins behalten, indem er die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Berechtigungsrichtlinie auf `()` setzt.

## Delegation von Quoten an Unterrahmen von Unterrahmen

Standardmäßig werden Unterrahmen von Unterrahmen keine Quoten zugewiesen und können daher `fetchLater()` nicht verwenden. Unterrahmen, denen die erhöhte 64KiB-Quote zugewiesen wurde, können die volle 64KiB-Quote an weitere Unterrahmen delegieren und ihnen die Verwendung von `fetchLater()` ermöglichen, indem sie ihre eigene `deferred-fetch` Berechtigungsrichtlinie setzen. Sie können ihre volle Quote nur an weitere Unterrahmen delegieren, nicht Teile davon, und können keine neuen Quoten spezifizieren. Unterrahmen mit der minimalen 8KiB-Quote können keine Quoten an Unterrahmen delegieren. Um Quoten delegiert zu bekommen, müssen Sub-Subrahmen sowohl in den Top-Level- als auch in den Unterrahmen `deferred-fetch` {{httpheader('Permissions-Policy')}} Direktiven enthalten sein.

## Wenn Quoten überschritten werden

Wenn Quoten überschritten werden, wird ein `QuotaExceededError` geworfen, wenn die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) Methode aufgerufen wird, um die aufgeschobene Anfrage zu starten.

Berechtigungsrichtlinienprüfungen sind von Quotenprüfungen nicht zu unterscheiden. Das Aufrufen von `fetchLater()` wird sowohl dann einen `QuotaExceededError` werfen, wenn die Quote tatsächlich überschritten wurde, als auch wenn die Quote für diesen Ursprung über eine Berechtigungsrichtlinie eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensiv sein und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere wenn sie Third-Party JavaScript einbetten.

## Beispiele

### Nutzung der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64KiB, wenn es dem Top-Level-Dokument hinzugefügt wird, aus dem 512KiB-Limit des Top-Levels.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgelistet und erhält daher 8KiB, wenn es dem Top-Level-Dokument aus dem 128KiB gemeinsamen Limit hinzugefügt wird.
3. 15 weitere Cross-Origin-Iframes würden jeweils 8KiB erhalten, wenn sie dem Top-Level-Dokument hinzugefügt werden (ähnlich wie `c.com`).
4. Das nächste Cross-Origin-Iframe würde keine Quote erhalten.
5. Wenn eines der Cross-Origin-Iframes entfernt wird, werden seine aufgeschobenen Abrufe gesendet.
6. Das nächste Cross-Origin-Iframe _würde_ eine 8KiB-Quote erhalten, da wieder eine Quote verfügbar ist.

### Widerruf der Beschränkung der minimalen Quote auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält keine Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine gleich-artigen Nachkommen können bis zu 512KiB verwenden.

### Völliger Widerruf der minimalen Quote mit Top-Level-Ausnahmen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält keine Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine gleich-artigen Nachkommen können das volle 640KiB verwenden, das jedoch auf 574KiB reduziert wird, wenn ein `b.com` Unterrahmen erstellt wird (oder noch geringer, wenn mehrere `b.com` Unterrahmen erstellt werden, von denen jeder eine 64KiB-Quote erhält).

### Völliger Widerruf der minimalen Quote ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Top-Level-Dokument und seine gleich-artigen Nachkommen können das volle 640KiB verwenden.
2. Unterrahmen erhalten keine zugewiesene Quote und können `fetchLater()` nicht verwenden.

### Gleich-origin Unterrahmen teilen die Quote mit dem Top-Level und können an Unterrahmen delegieren

Angenommen, ein Top-Level-Dokument auf `a.com`, das einen Unterrahmen von `a.com` einbettet, der einen Unterrahmen von `b.com` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Top-Level-Dokument von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://a.com/embed">` teilt die 512KiB-Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. `<iframe src="https://b.com/embed">` erhält eine 8KiB-Quote, wenn es dem Top-Level-Dokument hinzugefügt wird.

### Gleich-origin Unterrahmen können die Quote mit dem Top-Level nicht teilen, wenn sie durch einen Cross-Origin-Unterrahmen getrennt sind

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das einen Unterrahmen von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Top-Level-Dokument von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` teilt die 8KiB-Quote.
3. `<iframe src="https://a.com/embed">` erhält keine Quote; obwohl dies die gleiche Herkunft wie die oberste Herkunft ist, wird es durch einen Cross-Origin-Unterrahmen getrennt.

### Sekundäre Unterrahmen von Unterrahmen erhalten standardmäßig keine Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der standardmäßigen gemeinsamen Quote.
3. `<iframe src="https://c.com/">` erhält keine Quote.

### Zuweisung der vollen Quote an einen weiteren Unterrahmen

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet.

Angenommen, dass `a.com` die folgende Berechtigungsrichtlinie hat:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und angenommen, dass `b.com` die folgende Berechtigungsrichtlinie hat:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 64KiB der Standard-Quote.
3. `<iframe src="https://b.com/">` delegiert seine volle Quote von 8KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8KiB der Quote.

### Umleitungen übertragen keine Quote

Angenommen, ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `c.com` umleitet, und keine expliziten Berechtigungsrichtlinien auf der Top-Ebene.

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der standardmäßigen gemeinsamen Quote.
3. Die 8KiB werden nicht an `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber die 8KiB werden nicht freigegeben.

### Sandkäfigisierte gleich-origin Iframes sind effektiv separate Ursprünge

Zum Beispiel, wenn das folgende `<iframe>` auf `https://www.example.com` eingebettet wird:

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

Dies würde nicht als "gleich-origin" angesehen, trotz des Hostings auf demselben Ursprung wie das Top-Level-Dokument, da das `<iframe>` in einer sandbox-Umgebung ist. Daher sollte es standardmäßig eine 8KiB-Quote aus der insgesamt geteilten 128KiB-Quote zugewiesen bekommen.

### Deaktivieren von `fetchLater()` aus iframes

Sie können das `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut verwenden, um zu verhindern, dass `fetchLater()` Quote auf das `<iframe>` vergeben wird:

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

Die `allow="deferred-fetch"` Direktive ist notwendig, um zu verhindern, dass gleich-origin Iframes die 512KiB-Quote aufbrauchen, und die `allow="deferred-fetch-minimal"` Direktive ist notwendig, um zu verhindern, dass cross-origin Iframes die 128KiB-Quote aufbrauchen. Die Aufnahme beider Direktiven verhindert die Nutzung beider Quoten, unabhängig vom `src`-Wert.

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

In der folgenden Sequenz, die im Top-Level-Dokument enthalten ist, würden die ersten beiden Anfragen Erfolg haben, aber die dritte würde auslösen. Das liegt daran, dass, obwohl die gesamte 640KiB-Quote nicht überschritten wurde, die dritte Anfrage die Berichtsursprung-Quote für `https://a.example.com` überschreitet und auslöst.

```js
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://b.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
```

### Umleitungen von Unterrahmen zurück zum Top-Level-Ursprung erlauben die Nutzung der Top-Level-Quote

Angenommen, ein Top-Level-Dokument bei `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `a.com` umleitet, und keine expliziten Berechtigungsrichtlinien auf der Top-Ebene:

1. Der Top-Level-Rahmen von `a.com` hat die Standard-512KiB-Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der standardmäßigen gemeinsamen Quote von 128KiB.
3. Die 8KiB werden nicht an `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber es kann die volle Top-Level-Quote wieder teilen, und die zuvor zugewiesene 8KiB-Quote wird freigegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
