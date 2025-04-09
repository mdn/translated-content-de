---
title: fetchLater() Quoten
slug: Web/API/fetchLater_API/fetchLater_quotas
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Zurückgestellte [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) Abrufe werden gebündelt und gesendet, sobald die Registerkarte geschlossen wird. Der Benutzer kann sie zu diesem Zeitpunkt nicht mehr abbrechen. Um zu verhindern, dass Dokumente dieses Bandbreite zur Übertragung unbegrenzter Datenmengen über das Netzwerk missbrauchen, legt die API Quoten fest, wie viel Daten zurückgestellt werden können, um später gesendet zu werden.

Diese Quoten können über die {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktiven verwaltet werden.

## Übersicht

Das Gesamtvolumen für `fetchLater()` beträgt 640KiB pro Dokument. Standardmäßig ist dies in eine 512KiB Hauptdokumentenquote und eine 128KiB geteilte Quote unterteilt:

- Die 512KiB Hauptdokumentenquote ist standardmäßig für alle `fetchLater()` Anfragen vom Hauptdokument und direkten Unterrahmen mit diesem Ursprung vorgesehen.
- Die 128KiB geteilte Quote ist standardmäßig für alle `fetchLater()` Anfragen, die in Cross-Origin-Unterrahmen gestellt werden (z. B. `<iframe>`s, `<object>`s, `<embed>`s und `<frame>`s).

`fetchLater()` Anfragen können an jede URL gestellt werden und sind nicht auf denselben Ursprung wie das Dokument oder den Unterrahmen beschränkt, weshalb es wichtig ist, zwischen Anfragen im Hauptdokumentinhalte (ob an erst- oder drittpartei' Ursprünge) und denen in Unterrahmen zu unterscheiden.

Zum Beispiel, wenn ein Hauptdokument `a.com` ein `<script>` enthält, das eine `fetchLater()` Anfrage an `analytics.example.com` stellt, wäre diese Anfrage durch das Hauptdokumentlimit von 512KiB gebunden. Alternativ, wenn das Hauptdokument ein `<iframe>` mit einer Quelle von `analytics.example.com` einbettet, das eine `fetchLater()` Anfrage stellt, wäre diese Anfrage durch das 128KiB Limit gebunden.

## Quotenlimits nach Berichtursprung und Unterrahmen

Von der Hauptdokumentquote von 512KiB können nur 64KiB gleichzeitig für denselben Berichtursprung (der Ursprungs-URL der Anfrage) verwendet werden. Dies verhindert, dass Drittanbieterbibliotheken Quoten opportunistisch reservieren, bevor sie Daten zum Senden haben.

Jeder Cross-Origin Unterrahmen erhält standardmäßig eine 8KiB Quote aus der geteilten 128KiB Quote, die zugewiesen wird, wenn der Unterrahmen dem DOM hinzugefügt wird (unabhängig davon, ob `fetchLater()` in diesem Unterrahmen verwendet wird oder nicht). Dies bedeutet im Allgemeinen, dass nur die ersten 16 Cross-Origin-Unterrahmen, die einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie die 128KiB Quote verbrauchen.

## Erhöhung der Unterrahmenquoten durch Teilen der Hauptdokumentquote

Der Hauptdokumentursprung kann ausgewählten Cross-Origin-Unterrahmen eine erhöhte Quote von 64KiB gewähren, die aus dem größeren Hauptdokumentlimit von 512KiB stammt. Dies geschieht, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Berechtigungsrichtlinie aufgeführt werden. Diese wird zugewiesen, wenn der Unterrahmen dem DOM hinzugefügt wird, wodurch weniger Quote für das Hauptdokument und direkte gleiche Ursprungsunterrahmen zur Verfügung steht. Mehrere gleiche Ursprungsunterdomänen können jeweils eine 64KiB Quote erhalten.

## Einschränkung der geteilten Quote

Der Hauptdokumentursprung kann auch die 128KiB geteilte Quote auf benannte Cross-Origin-Unterrahmen beschränken, indem er diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Berechtigungsrichtlinie aufführt. Er kann auch die gesamte 128KiB Standardunterrahmenquote zurückziehen und stattdessen die volle 640KiB Quote für sich selbst und benannte `deferred-fetch` Cross-Origin übernehmen, indem die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Berechtigungsrichtlinie auf `()` gesetzt wird.

## Weiterleitung von Quoten an Unterrahmen von Unterrahmen

Standardmäßig erhalten Unterrahmen von Unterrahmen keine Quote und können `fetchLater()` nicht verwenden. Unterrahmen, denen die erhöhte 64KiB Quote zugewiesen wird, können die volle 64KiB Quote an weitere Unterrahmen weitergeben und ihnen die Verwendung von `fetchLater()` ermöglichen, indem sie ihre eigene `deferred-fetch` Berechtigungsrichtlinie festlegen. Sie können nur ihre volle Quote an weitere Unterrahmen delegieren, nicht Teile davon, und können keine neuen Quoten festlegen. Unterrahmen, die die minimale 8KiB Quote verwenden, können keine Quoten an weitere Unterrahmen delegieren. Um eine zugeteilte Quote zu erhalten, müssen Unter-Unterrahmen sowohl in den `deferred-fetch` {{httpheader('Permissions-Policy')}} Direktiven des Hauptdokuments als auch des Unterrahmens enthalten sein.

## Wenn Quoten überschritten werden

Wenn Quoten überschritten werden, wird ein `QuotaExceededError` ausgelöst, wenn die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) Methode aufgerufen wird, um die zurückgestellte Anfrage zu initiieren.

Berechtigungsrichtlinienprüfungen sind von Quotenprüfungen nicht zu unterscheiden. Das Aufrufen von `fetchLater()` löst einen `QuotaExceededError` sowohl dann aus, wenn die Quote tatsächlich überschritten wird, als auch wenn die Quote für diesen Ursprung via einer Berechtigungsrichtlinie eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensiv vorgehen und in fast allen Fällen `QuotaExceededError` Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

## Beispiele

### Verbrauch der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64KiB beim Hinzufügen zum Hauptdokument, aus dem 512KiB Limit des Hauptdokuments.
2. Ein `<iframe src="https://c.com/page">` wird nicht aufgelistet und erhält daher 8KiB, wenn es aus dem 128KiB gemeinsamen Limit dem Hauptdokument hinzugefügt wird.
3. 15 weitere Cross-Origin-Frames würden jeweils 8KiB erhalten, wenn sie dem Hauptdokument hinzugefügt werden (ähnlich wie `c.com`).
4. Der nächste Cross-Origin-Frame würde keine Quote erhalten.
5. Wenn einer der Cross-Origin-Frames entfernt wird, werden seine zurückgestellten Abrufe gesendet.
6. Der nächste Cross-Origin-Frame _würde_ eine 8KiB Quote erhalten, da wieder Quote verfügbar ist.

### Rücknahme der minimalen Quote auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8KiB beim Hinzufügen zum Hauptdokument.
2. `<iframe src="https://c.com/page">` erhält keine Quote beim Hinzufügen zum Hauptdokument.
3. Das Hauptdokument und seine gleiche Ursprungs-Nachkommen können bis zu 512KiB verwenden.

### Vollständige Rücknahme der minimalen Quote mit Ausnahmen auf oberster Ebene

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64KiB beim Hinzufügen zum Hauptdokument.
2. `<iframe src="https://c.com/page">` erhält keine Quote beim Hinzufügen zum Hauptdokument.
3. Das Hauptdokument und seine gleiche Ursprungsnachkommen können bis zu 640KiB verwenden, wird jedoch auf 574KiB reduziert, wenn ein `b.com` Unterrahmen erstellt wird (oder noch weniger, wenn mehrere `b.com` Unterrahmen erstellt werden, von denen jeder eine 64KiB Quote erhält).

### Vollständige Rücknahme der minimalen Quote ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Hauptdokument und seine gleiche Ursprungsnachkommen können die vollen 640KiB verwenden.
2. Unterrahmen wird keine Quote zugewiesen und können `fetchLater()` nicht verwenden.

### Gleich-Ursprung-Unterrahmen teilen die Quote mit der obersten Ebene und können an Unterrahmen delegieren

Angenommen, ein Hauptdokument auf `a.com`, das einen Unterrahmen von `a.com` einbettet, der wiederum einen Unterrahmen von `b.com` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Hauptdokument von `a.com` hat die Standard 512KiB Quote.
2. `<iframe src="https://a.com/embed">` teilt die 512KiB Quote beim Hinzufügen zum Hauptdokument.
3. `<iframe src="https://b.com/embed">` erhält eine 8KiB Quote beim Hinzufügen zum Hauptdokument.

### Gleich-Ursprung-Unterrahmen können keine Quote mit der obersten Ebene teilen, wenn sie von einem Cross-Origin-Unterrahmen getrennt sind

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das wiederum einen Unterrahmen von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Hauptdokument von `a.com` hat die Standard 512KiB Quote.
2. `<iframe src="https://b.com/">` teilt die 8KiB Quote.
3. `<iframe src="https://a.com/embed">` erhält keine Quote; obwohl es sich im gleichen Ursprung wie der oberste Ursprung befindet, wird es durch ein Cross-Origin getrennt.

### Sekundäre Unterrahmen von Unterrahmen erhalten standardmäßig keine Quote

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das wiederum ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Der Hauptrahmen von `a.com` hat die Standard 512KiB Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der Standard-geteilten Quote.
3. `<iframe src="https://c.com/">` erhält keine Quote.

### Gewährung der vollen Quote an einen weiteren Unterrahmen

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das wiederum ein `<iframe src="https://c.com/">` einbettet.

Angenommen, `a.com` besitzt die folgende Berechtigungsrichtlinie:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und, angenommen, `b.com` besitzt die folgende Berechtigungsrichtlinie:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Hauptrahmen von `a.com` hat die Standard 512KiB Quote.
2. `<iframe src="https://b.com/">` erhält 64KiB der Standardquote.
3. `<iframe src="https://b.com/">` delegiert seine volle Quote von 8KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8KiB der Quote.

### Weiterleitungen übertragen keine Quote

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `c.com` weiterleitet, und keine expliziten obersten Berechtigungsrichtlinien.

1. Der Hauptrahmen von `a.com` hat die Standard 512KiB Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der Standard-geteilten Quote.
3. Die 8KiB werden nicht zu `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin weiterleitet, aber die 8KiB werden nicht freigegeben.

### Weiterleitungen von Unterrahmen zurück zum Hauptursprung ermöglichen die Nutzung der Hauptdokumentquote

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `a.com` weiterleitet, und keine expliziten obersten Berechtigungsrichtlinien.

1. Der Hauptrahmen von `a.com` hat die Standard 512KiB Quote.
2. `<iframe src="https://b.com/">` erhält 8KiB der Standard-geteilten Quote.
3. Die 8KiB werden nicht zu `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin weiterleitet, jedoch kann es die volle Hauptdokumentquote erneut teilen und die 8KiB werden freigegeben.

### Beispiele, die einen `QuotaExceededError` werfen

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

### Beispiele, die letztendlich einen `QuotaExceededError` werfen

In der folgenden Sequenz, die sich im Hauptdokument befindet, würden die ersten beiden Anfragen erfolgreich sein, aber die dritte würde einen Fehler werfen. Das liegt daran, dass die dritte Anfrage das Berichtsherkunfts-Limit für `https://a.example.com` überschreitet und daher einen Fehler werfen würde, obwohl die Gesamtquote von 640KiB nicht überschritten wurde.

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
