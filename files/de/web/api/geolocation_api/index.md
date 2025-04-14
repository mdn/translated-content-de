---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es dem Benutzer, Webanwendungen ihren Standort bereitzustellen, falls er dies wünscht. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, um Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird diesen auffordern, den Zugriff auf den Standort das erste Mal zuzulassen, wenn dieser angefordert wird.

## Konzepte und Nutzung

In Ihrer Webanwendung möchten Sie oft die Standortinformationen eines Benutzers abrufen, beispielsweise um deren Standort auf einer Karte darzustellen oder personalisierte Informationen anzuzeigen, die für deren Standort relevant sind.

Auf die Geolocation API wird durch einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dies veranlasst den Browser des Benutzers, um Erlaubnis zu bitten, auf deren Standortdaten zuzugreifen. Wenn sie zustimmen, wird der Browser die beste verfügbare Funktionalität auf dem Gerät nutzen, um auf diese Informationen zuzugreifen (zum Beispiel GPS).

Der Entwickler kann nun auf diese Standortinformationen auf verschiedene Weisen zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft den aktuellen Standort des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handlerfunktion, die automatisch jedes Mal aufgerufen wird, wenn sich die Position des Geräts ändert, und gibt den aktualisierten Standort zurück.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgscallback: Wenn das Abrufen des Standorts erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehlercallback: Wenn das Abrufen des Standorts nicht erfolgreich ist, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bietet, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für das Abrufen der Positionsdaten bereitstellt.

Für weitere Informationen zur Nutzung von Geolocation lesen Sie [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden zum Abrufen der aktuellen Position des Benutzers, Überwachen von Positionsänderungen und Aufheben einer zuvor festgelegten Überwachung.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine `GeolocationPosition`-Instanz wird durch einen erfolgreichen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden innerhalb eines Erfolgscallbacks zurückgegeben und enthält einen Zeitstempel sowie eine Instanz des Objekts [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates).
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Position eines Benutzers; eine `GeolocationCoordinates`-Instanz enthält Breitengrad, Längengrad und andere wichtige relevante Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird durch einen erfolglosen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden innerhalb eines Fehlercallbacks zurückgegeben und enthält einen Fehlercode und eine Nachricht.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine Instanz des Objekts [`Geolocation`](/de/docs/Web/API/Geolocation) zurück, von der aus auf alle anderen Funktionen zugegriffen werden kann.

## Sicherheitsüberlegungen

Die Geolocation-API ermöglicht es Benutzern, standortbezogene Informationen programmatisch in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zuzugreifen.

Der Zugriff kann weiter durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} kontrolliert werden.
Die Standard-Zulassungsliste für `geolocation` ist `self`, was den Zugang zu Standortinformationen nur in gleich-originären verschachtelten Frames erlaubt.
Die Nutzung durch Dritte ist möglich, indem ein `Permissions-Policy`-Antwortheader gesetzt wird, um eine Berechtigung für eine bestimmte externe Herkunft zu gewähren:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"`-Attribut muss dann dem iframe-Element hinzugefügt werden, das Quellen von dieser Herkunft enthält:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Standortdaten können Informationen offenbaren, die der Gerätebesitzer nicht teilen möchte.
Daher müssen Benutzer eine ausdrückliche Erlaubnis über eine Eingabeaufforderung erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Lebensdauer einer erteilten Berechtigung hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Mit der [Permissions API](/de/docs/Web/API/Permissions_API) kann die `geolocation` Berechtigung verwendet werden, um zu testen, ob der Zugriff auf Positionsinformationen `granted`, `denied` oder `prompt` (erfordert die Bestätigung durch den Benutzer einer Eingabeaufforderung) ist.

## Beispiele

Siehe [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die WLAN-basierte Standortbestimmung oft von Google bereitgestellt wird, ist die normale Geolocation-API möglicherweise in China nicht verfügbar. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) verwenden. Diese Dienste nutzen die IP-Adresse des Nutzers und/oder eine lokale App, um erweiterte Positionsbestimmungen bereitzustellen.

## Siehe auch

- [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation API auf w3.org](https://www.w3.org/TR/geolocation/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
