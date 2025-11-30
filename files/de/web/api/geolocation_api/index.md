---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation-API** ermöglicht es dem Benutzer, Webanwendungen ihren Standort mitzuteilen, falls sie dies wünschen. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird den Benutzer beim ersten Anfordern auffordern, den Zugriff auf den Standort zu erlauben.

## Konzepte und Verwendung

Häufig möchte man in Ihrer Webanwendung die Standortinformationen eines Benutzers abrufen, um beispielsweise ihren Standort auf einer Karte darzustellen oder personalisierte Informationen bereitzustellen, die für ihren Standort relevant sind.

Auf die Geolocation-API wird über einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dies führt dazu, dass der Browser des Benutzers ihn um Erlaubnis bittet, auf seine Standortdaten zuzugreifen. Wenn sie dies erlauben, verwendet der Browser die bestmögliche Funktionalität des Geräts, um auf diese Informationen zuzugreifen (z.B. GPS).

Der Entwickler kann nun auf diese Standortinformationen auf verschiedene Weise zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft den aktuellen Standort des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handlerfunktion, die automatisch bei jeder Änderung der Geräteposition aufgerufen wird und den aktualisierten Standort zurückgibt.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgscallback: Wenn das Abrufen der Standortinformationen erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehlercallback: Wenn das Abrufen der Standortinformationen fehlgeschlagen ist, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Zugriffsinformationen darüber bietet, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für das Abrufen der Standortdaten bereitstellt.

Für weitere Informationen zur Verwendung der Geolocation lesen Sie [Verwenden der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden, um die aktuelle Position des Benutzers abzurufen, Änderungen ihrer Position zu überwachen und eine zuvor gesetzte Überwachung zu löschen.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine `GeolocationPosition`-Instanz wird durch einen erfolgreichen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden, in einem Erfolgscallback zurückgegeben und enthält einen Zeitstempel sowie eine [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objektinstanz.
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Position eines Benutzers; eine `GeolocationCoordinates`-Instanz enthält Breitengrad, Längengrad und andere wichtige verwandte Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird durch einen fehlgeschlagenen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden, in einem Fehlercallback zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen auf andere Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine [`Geolocation`](/de/docs/Web/API/Geolocation)-Objektinstanz zurück, von der aus alle anderen Funktionalitäten zugänglich sind.

## Sicherheitsüberlegungen

Die Geolocation-API ermöglicht es Benutzern, in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) programmgesteuert auf Standortinformationen zuzugreifen.

Der Zugriff kann weiter durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} gesteuert werden.
Die Standard-Berechtigungsliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in gleichartigen eingebetteten Frames erlaubt.
Die Nutzung durch Dritte wird durch Setzen eines `Permissions-Policy`-Response-Headers ermöglicht, um einer bestimmten Drittpartei-Quelle die Berechtigung zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"`-Attribut muss dann dem iframe-Element hinzugefügt werden, dessen Quellen von dieser Quelle stammen:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Geolocation-Daten können Informationen preisgeben, die der Gerätebesitzer nicht teilen möchte.
Daher müssen Benutzer explizit über eine Aufforderung die Erlaubnis erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Lebensdauer einer gewährten Berechtigung hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Die [Permissions API](/de/docs/Web/API/Permissions_API) `geolocation`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff, um Standortinformationen zu verwenden, `granted`, `denied` oder `prompt` ist (erfordert die Anerkennung einer Aufforderung durch den Benutzer).

## Beispiele

Siehe [Verwenden der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die Standortbestimmung auf Basis von Wi-Fi oft von Google bereitgestellt wird, kann die Standard-Geolocation-API in China nicht verfügbar sein. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) nutzen. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um die Positionierung zu verbessern.

## Siehe auch

- [Verwenden der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
