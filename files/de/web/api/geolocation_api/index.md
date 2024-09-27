---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es dem Benutzer, seine Position webbasierten Anwendungen zur Verfügung zu stellen, wenn er dies wünscht. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt nutzen möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers fordert den Benutzer auf, den Zugriff auf den Standort zu erlauben, wenn dieser zum ersten Mal angefordert wird.

## Konzepte und Nutzung

Sie möchten häufig Standortinformationen eines Benutzers in Ihrer Webanwendung abrufen, z.B. um seinen Standort auf einer Karte anzuzeigen oder personalisierte Informationen bereitzustellen, die für seinen Standort relevant sind.

Auf die Geolocation API wird über einen Aufruf an [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dadurch wird der Browser des Benutzers ihn um Erlaubnis bitten, auf seine Standortdaten zuzugreifen. Wenn der Benutzer zustimmt, dann verwendet der Browser die bestmöglichen Funktionen des Geräts (z.B. GPS), um auf diese Informationen zuzugreifen.

Der Entwickler kann jetzt auf diese Standortinformationen auf verschiedene Weise zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft die aktuelle Position des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handler-Funktion, die automatisch bei jeder Positionsänderung des Geräts aufgerufen wird und die aktualisierte Position zurückgibt.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgs-Callback: Wenn das Abrufen der Position erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehler-Callback: Wenn das Abrufen der Position nicht erfolgreich ist, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bietet, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für das Abrufen der Positionsdaten bereitstellt.

Für weitere Informationen zur Verwendung von Geolocation lesen Sie [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden zum Abrufen der aktuellen Position des Benutzers, zum Überwachen von Positionsänderungen und zum Löschen einer zuvor festgelegten Überwachung.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Stellt die Position eines Benutzers dar. Eine Instanz von `GeolocationPosition` wird von einem erfolgreichen Aufruf einer der enthaltenen Methoden in [`Geolocation`](/de/docs/Web/API/Geolocation), innerhalb eines Erfolgs-Callbacks, zurückgegeben und enthält einen Zeitstempel sowie eine Instanz eines [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates).
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Stellt die Koordinaten der Position eines Benutzers dar; eine Instanz von `GeolocationCoordinates` enthält Breitengrad, Längengrad und andere wichtige verwandte Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird von einem fehlgeschlagenen Aufruf einer der enthaltenen Methoden in [`Geolocation`](/de/docs/Web/API/Geolocation), innerhalb eines Fehler-Callbacks, zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine Instanz eines [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekts zurück, von dem aus auf alle anderen Funktionen zugegriffen werden kann.

## Sicherheitsüberlegungen

Die Geolocation API ermöglicht es Benutzern, programmatisch auf Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zuzugreifen.

Der Zugriff kann außerdem durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) Direktive {{HTTPHeader("Permissions-Policy/geolocation", "geolocation")}} kontrolliert werden.
Die Standard-Zulassungsliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in untergeordneten Frames mit der gleichen Herkunft erlaubt.
Die Nutzung durch Dritte wird ermöglicht, indem ein `Permissions-Policy`-Antwort-Header gesetzt wird, um einer bestimmten Drittanbieter-Herkunft die Erlaubnis zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"`-Attribut muss dann dem iframe-Element hinzugefügt werden, dessen Quellen von dieser Herkunft stammen:

```html
<iframe src="https://b.example.com" allow="geolocation"/></iframe>
```

Geolocation-Daten können Informationen offenbaren, die der Gerätebesitzer nicht teilen möchte. Daher müssen Benutzer über ein Eingabefeld explizit die Erlaubnis erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Lebensdauer einer erteilten Erlaubnis hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein. Die [Permissions API](/de/docs/Web/API/Permissions_API) `geolocation`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf Standortinformationen `granted`, `denied` oder `prompt` (erfordert die Bestätigung des Benutzers über ein Eingabefeld) ist.

## Beispiele

Sehen Sie [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die Wi-Fi-basierte Ortung oft von Google bereitgestellt wird, kann die reguläre Geolocation API in China nicht verfügbar sein. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) verwenden. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionierung bereitzustellen.

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation API auf w3.org](https://www.w3.org/TR/geolocation/)
- [Wer hat meine Geolocation verschoben?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
