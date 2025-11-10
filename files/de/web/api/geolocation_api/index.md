---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation-API** ermöglicht es dem Benutzer, seine Position an Webanwendungen zu übermitteln, sofern er dies wünscht. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird beim ersten Zugriff um Erlaubnis bitten, Standortinformationen zu verwenden.

## Konzepte und Verwendung

In Ihrer Webanwendung möchten Sie häufig die Standortinformationen eines Benutzers abrufen, zum Beispiel um seine Position auf einer Karte anzuzeigen oder personalisierte Informationen anzuzeigen, die für seinen Standort relevant sind.

Auf die Geolocation-API wird über einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dies führt dazu, dass der Browser des Benutzers um Erlaubnis bittet, auf die Standortdaten zuzugreifen. Wenn der Benutzer zustimmt, verwendet der Browser die am besten verfügbare Funktionalität auf dem Gerät, um auf diese Informationen zuzugreifen (zum Beispiel GPS).

Der Entwickler kann nun auf diese Standortinformationen auf verschiedene Weisen zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft die aktuelle Position des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handlerfunktion, die automatisch aufgerufen wird, wenn sich die Position des Geräts ändert, und gibt die aktualisierte Position zurück.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgs-Callback: Wenn die Standortabfrage erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehler-Callback: Wenn die Standortabfrage fehlschlägt, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bietet, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für die Abfrage der Positionsdaten bietet.

Für weitere Informationen über die Nutzung der Geolocation lesen Sie [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden, um die aktuelle Position des Benutzers abzurufen, Änderungen seiner Position zu überwachen und eine zuvor gesetzte Überwachung zu löschen.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine Instanz von `GeolocationPosition` wird bei einem erfolgreichen Aufruf einer der innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden in einem Erfolgs-Callback zurückgegeben und enthält einen Zeitstempel plus ein Instanzobjekt von [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates).
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Position eines Benutzers; eine Instanz von `GeolocationCoordinates` enthält Breitengrad, Längengrad und andere wichtige verwandte Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird bei einem fehlgeschlagenen Aufruf einer der innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden in einem Fehler-Callback zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt ein Instanzobjekt von [`Geolocation`](/de/docs/Web/API/Geolocation) zurück, von dem aus auf alle anderen Funktionen zugegriffen werden kann.

## Sicherheitsüberlegungen

Die Geolocation-API ermöglicht Benutzern den programmatischen Zugriff auf Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts).

Der Zugriff kann zusätzlich durch die Direktive [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}}. Die Standard-Zugriffsliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen in gleichseitig angegebenen verschachtelten Frames ermöglicht. Die Verwendung durch Dritte wird ermöglicht, indem ein `Permissions-Policy`-Response-Header gesetzt wird, um einer bestimmten Drittpartei-Quelle die Erlaubnis zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das Attribut `allow="geolocation"` muss dann dem iframe-Element hinzugefügt werden, das Quellen von dieser Quelle enthält:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Geodaten können Informationen offenlegen, die der Gerätebesitzer nicht teilen möchte. Daher müssen Benutzer explizit die Erlaubnis über eine Eingabeaufforderung erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus lautet bereits `granted` oder `denied`). Die Dauer einer erteilten Berechtigung hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein. Die `geolocation`-Berechtigung der [Permissions-API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um zu testen, ob der Zugriff zur Nutzung von Standortinformationen `granted`, `denied` oder `prompt` ist (benötigt die Bestätigung eines Benutzers).

## Beispiele

Siehe [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da Wi-Fi-basierte Ortungen oft von Google bereitgestellt werden, ist die normale Geolocation-API möglicherweise in China nicht verfügbar. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) verwenden. Diese Dienste nutzen die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionierung bereitzustellen.

## Siehe auch

- [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
