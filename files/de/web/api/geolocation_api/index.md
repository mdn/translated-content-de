---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es dem Benutzer, seinen Standort den Webanwendungen bereitzustellen, falls er dies wünscht. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu melden.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird den Benutzer beim ersten Mal, wenn der Zugriff angefordert wird, auffordern, den Zugriff auf den Standort zu erlauben.

## Konzepte und Verwendung

In Ihrer Web-App möchten Sie häufig die Standortinformationen eines Benutzers abrufen, um beispielsweise ihren Standort auf einer Karte anzuzeigen oder personalisierte Informationen bereitzustellen, die für ihren Standort relevant sind.

Die Geolocation API wird durch einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) aufgerufen; dies veranlasst den Browser des Benutzers, ihn um Erlaubnis zu bitten, auf seine Standortdaten zuzugreifen. Wenn sie zustimmen, verwendet der Browser die bestmögliche Funktionalität auf dem Gerät, um auf diese Informationen zuzugreifen (zum Beispiel GPS).

Der Entwickler kann jetzt auf diese Standortinformationen in verschiedener Weise zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft den aktuellen Standort des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handlerfunktion, die automatisch jedes Mal aufgerufen wird, wenn sich die Position des Geräts ändert, und gibt die aktualisierten Standortdaten zurück.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgscallback: Wenn das Abrufen des Standorts erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das den Zugriff auf die Standortdaten ermöglicht.
- Ein optionaler Fehlercallback: Wenn das Abrufen des Standorts nicht erfolgreich ist, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bereitstellt, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für das Abrufen der Positionsdaten bereitstellt.

Für weitere Informationen zur Nutzung der Geolocation lesen Sie [Using the Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden zum Abrufen der aktuellen Position des Benutzers, zum Überwachen von Positionsänderungen und zum Löschen eines zuvor gesetzten Watches.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine `GeolocationPosition`-Instanz wird durch einen erfolgreichen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden in einem Erfolgscallback zurückgegeben und enthält einen Zeitstempel sowie eine [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objektinstanz.
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Position eines Benutzers; eine `GeolocationCoordinates`-Instanz enthält Längengrad, Breitengrad und andere wichtige zugehörige Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird durch einen erfolglosen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden in einem Fehlercallback zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen für andere Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine [`Geolocation`](/de/docs/Web/API/Geolocation)-Objektinstanz zurück, über die auf alle anderen Funktionen zugegriffen werden kann.

## Sicherheitsaspekte

Die Geolocation API erlaubt es Benutzern, auf sichere Weise programmatisch auf Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zuzugreifen.

Der Zugriff kann zusätzlich durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} gesteuert werden.
Die Standardzugriffsliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in gleichartigen eingebetteten Frames erlaubt.
Die Nutzung durch Dritte wird ermöglicht, indem ein `Permissions-Policy`-Antwortheader gesetzt wird, um einer bestimmten Drittanbieter-Herkunft die Berechtigung zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"`-Attribut muss dann dem iframe-Element mit Quellen von dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="geolocation"/></iframe>
```

Geolokalisierungsdaten können Informationen offenbaren, die der Gerätebesitzer nicht teilen möchte.
Daher müssen Benutzer eine ausdrückliche Genehmigung über eine Eingabeaufforderung erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Lebensdauer einer erteilten Berechtigung hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Die [Permissions API](/de/docs/Web/API/Permissions_API) `geolocation`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf die Nutzung von Standortinformationen `granted`, `denied` oder `prompt` (erfordert die Bestätigung einer Eingabeaufforderung durch den Benutzer) ist.

## Beispiele

Siehe [Using the Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da Wi-Fi-basierte Ortungsdienste oft von Google bereitgestellt werden, kann die Standard-Geolocation-API in China nicht verfügbar sein. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) nutzen. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionsbestimmung bereitzustellen.

## Siehe auch

- [Using the Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation API auf w3.org](https://www.w3.org/TR/geolocation/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
