---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es Benutzern, Webanwendungen ihren Standort mitzuteilen, wenn sie dies möchten. Aus Datenschutzgründen werden Benutzer um Erlaubnis gebeten, bevor Standortinformationen übermittelt werden.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen ihrem Manifest die Berechtigung `"geolocation"` hinzufügen. Das Betriebssystem fragt Benutzer beim ersten Zugriff auf den Standort nach ihrer Zustimmung.

> [!NOTE]
> Das {{htmlelement("geolocation")}}-Element bietet eine alternative Möglichkeit, auf Standortdaten zuzugreifen und sie zu verarbeiten. Es behebt einige Schwächen der Geolocation API: Es bietet eine einheitliche Benutzeroberfläche und eine intuitivere Verwaltung von Berechtigungen.

## Konzepte und Verwendung

In Webanwendungen werden Standortinformationen häufig benötigt, beispielsweise um den Standort eines Benutzers auf einer Karte darzustellen oder standortbezogene Informationen anzuzeigen.

Der Zugriff auf die Geolocation API erfolgt über [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation). Daraufhin bittet der Browser den Benutzer um die Erlaubnis, auf seine Standortdaten zuzugreifen. Stimmt er zu, nutzt der Browser die beste verfügbare Funktion des Geräts, um diese Informationen zu ermitteln, beispielsweise GPS.

Entwickler können auf diese Standortinformationen auf zwei Arten zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft den aktuellen Standort des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handler-Funktion, die bei jeder Änderung der Geräteposition automatisch aufgerufen wird und den aktualisierten Standort zurückgibt.

In beiden Fällen akzeptiert der Methodenaufruf bis zu drei Argumente:

- Einen erforderlichen Erfolgs-Callback: Wenn der Standort erfolgreich ermittelt wurde, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt. Dieses ermöglicht den Zugriff auf die Standortdaten.
- Einen optionalen Fehler-Callback: Wenn die Standortermittlung fehlschlägt, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt. Dieses enthält Informationen über den Fehler.
- Ein optionales Objekt mit Optionen für die Ermittlung der Positionsdaten.

Weitere Informationen zur Verwendung der Geolocation API finden Sie unter [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API. Sie enthält Methoden zum Abrufen des aktuellen Standorts eines Benutzers, zum Überwachen von Standortänderungen und zum Beenden einer zuvor eingerichteten Überwachung.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine `GeolocationPosition`-Instanz wird bei einem erfolgreichen Aufruf einer Methode von [`Geolocation`](/de/docs/Web/API/Geolocation) an den Erfolgs-Callback übergeben. Sie enthält einen Zeitstempel und eine Instanz des Objekts [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates).
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Position eines Benutzers. Eine `GeolocationCoordinates`-Instanz enthält den Breiten- und Längengrad sowie weitere wichtige zugehörige Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird bei einem fehlgeschlagenen Aufruf einer Methode von [`Geolocation`](/de/docs/Web/API/Geolocation) an den Fehler-Callback übergeben. Er enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen anderer Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine Instanz des Objekts [`Geolocation`](/de/docs/Web/API/Geolocation) zurück, über die alle weiteren Funktionen zugänglich sind.

## Sicherheitsaspekte

Die Geolocation API ermöglicht den programmgesteuerten Zugriff auf Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts).

Der Zugriff kann zusätzlich durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} gesteuert werden.
Die standardmäßige Zulassungsliste für `geolocation` ist `self`. Damit ist der Zugriff auf Standortinformationen nur in verschachtelten Frames derselben Origin erlaubt.
Die Nutzung durch Drittanbieter wird ermöglicht, indem ein `Permissions-Policy`-Antwortheader gesetzt wird, der einer bestimmten Drittanbieter-Origin die Berechtigung erteilt:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Anschließend muss dem iframe-Element, dessen Quelle von dieser Origin stammt, das Attribut `allow="geolocation"` hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Standortdaten können Informationen offenlegen, die der Eigentümer des Geräts nicht teilen möchte.
Daher müssen Benutzer ausdrücklich über eine Abfrage zustimmen, wenn [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird – es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`.
Wie lange eine erteilte Berechtigung gültig bleibt, hängt vom User Agent ab. Sie kann zeitlich begrenzt, auf eine Sitzung beschränkt oder sogar dauerhaft sein.
Mit der `geolocation`-Berechtigung der [Permissions API](/de/docs/Web/API/Permissions_API) lässt sich prüfen, ob der Zugriff auf Standortinformationen `granted`, `denied` oder `prompt` ist (`prompt` erfordert die Bestätigung einer Abfrage durch den Benutzer).

## Beispiele

Beispielcode finden Sie unter [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die WLAN-basierte Standortbestimmung häufig von Google bereitgestellt wird, ist die reguläre Geolocation API in China möglicherweise nicht verfügbar. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/docs/jsapi?title=jsapi4/index), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/service/webService/webServiceGuide/position/webServiceIp) verwenden. Diese Dienste nutzen die IP-Adresse des Benutzers und/oder eine lokale App, um eine genauere Standortbestimmung zu ermöglichen.

## Siehe auch

- {{htmlelement("geolocation")}}-Element
- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Wer hat meine Geolocation verschoben?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
