---
title: id
slug: Web/Manifest/Reference/id
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `id` Manifestmitglied wird verwendet, um einen eindeutigen Bezeichner für Ihre Webanwendung anzugeben.

## Syntax

```json-nolint
/* Absolute URL */
"id": "https://example.com/myapp"

/* Relative URL */
"id": "myapp/v2"

/* URL with query parameters */
"id": "myapp?version=2&mode=trial"
```

### Werte

- `id`
  - : Eine Zeichenkette, die die Form einer URL annimmt.
    Die URL muss mit dem [`start_url`](/de/docs/Web/Manifest/Reference/start_url) Ihrer Web-App gleich ursprungsbezogen sein.
    Wenn `id` eine relative URL ist, wird sie unter Verwendung des Ursprungs von `start_url` aufgelöst. Jegliche Fragmente im `id` werden immer ignoriert.
    Wenn `id` nicht angegeben ist oder der Wert in irgendeiner Weise ungültig ist (zum Beispiel keine Zeichenkette, keine gültige URL, nicht gleich ursprungsbezogen mit `start_url`), wird der `start_url`-Wert verwendet.

## Beschreibung

Das `id` Manifestmitglied dient als eindeutiger Bezeichner für Ihre Web-App. Es ermöglicht Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einem `id` stößt, das nicht mit einer bereits installierten Anwendung übereinstimmt, behandelt er dieses Manifest als Beschreibung einer eigenständigen Anwendung, selbst wenn sie von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einem `id` stößt, das mit der Identität einer bereits installierten App übereinstimmt, behandelt er das neue Manifest als Ersatz für das bestehende App-Manifest, selbst wenn die App von einer anderen URL als die vorher installierte bereitgestellt wird.

> [!NOTE]
> Während das `id` wie eine URL verarbeitet wird, verweist es nicht auf eine Ressource, die zugänglich ist, daher muss es sich nicht im [scope](/de/docs/Web/Manifest/Reference/scope) der App befinden.

Das `id` kann auch von Diensten verwendet werden, die Web-App-Listen sammeln, um Anwendungen eindeutig zu identifizieren.

Einige wichtige Punkte, die bei der Verwendung des `id`-Mitglieds zu beachten sind:

- Verwenden Sie einen vorangestellten `/`, um anzugeben, dass das `id` ein root-relativer URL-Pfad ist.
- Da `id` gegen den Ursprung von `start_url` aufgelöst wird, lösen `id`-Werte wie `../foo`, `foo`, `/foo` und `./foo` alle zum selben Bezeichner relativ zum Ursprung auf. Zum Beispiel, wenn `start_url` `https://example.com/app/` ist, werden all diese `id`-Werte zu `https://example.com/foo/` aufgelöst.
- Standardmäßige URL-Codierungs- und -Decodierungsregeln gelten, wenn der `id`-Wert aufgelöst wird.
- Fragmente im `id` werden während der Verarbeitung entfernt. Zum Beispiel, wenn `id` auf `foo#bar` gesetzt ist, wird es als `foo` aufgelöst. Ebenso, wenn `id` undefiniert ist und `start_url` `https://example.com/app/#home` ist, wird `id` zu `https://example.com/app/` aufgelöst.
- Abfrageparameter im `id` werden beibehalten und im endgültig aufgelösten Bezeichner eingeschlossen.

## Beispiele

### Erstellen einer eigenständigen App-Version

Angenommen, Sie erstellen eine Web-App mit folgendem Manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

Wenn Sie später eine weitere Version dieser App mit wesentlichen Änderungen erstellen und sie als andere App behandelt werden soll, können Sie das Manifest folgendermaßen hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall behandeln Browser, selbst wenn beide Manifestdateien von derselben URL bereitgestellt werden, das neue Manifest als Beschreibung einer eigenständigen Anwendung, da das `id` unterschiedlich ist. Infolgedessen können Benutzer beide Versionen gleichzeitig installiert haben.

### Aktualisieren einer bestehenden App

Betrachten Sie ein Szenario, in dem Sie eine Web-App mit folgendem Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://old-domain.com/app"
}
```

Wenn Sie sich jedoch später entscheiden, die App auf eine andere Domain zu verschieben, würden Sie das Manifest wie folgt aktualisieren:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://new-domain.com/app"
}
```

Browser behandeln dieses neue Manifest als Aktualisierung der bestehenden App, weil die `id`-Werte übereinstimmen. In diesem Fall erhalten Benutzer ein Update ihrer bestehenden App, anstatt aufgefordert zu werden, eine neue App zu installieren.

### Verständnis der `id`-Auflösung

Angenommen, der `start_url` Ihrer App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id`-Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöstes `id`                   | Erklärung                                                                                       |
| ----------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| undefiniert                   | `https://example.com/my-app/home`  | Standardmäßig `start_url`                                                                       |
| `""`                          | `https://example.com/my-app/home`  | Leere Zeichenkette wird zu `start_url`                                                          |
| `/`                           | `https://example.com/`             | Root-relativer URL                                                                              |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad aufgelöst gegen den Ursprung von `start_url` mit beibehaltenen Abfrageparametern |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad aufgelöst gegen den Ursprung von `start_url` mit entferntem Fragment             |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Cross-Origin-URL nicht erlaubt, fällt auf `start_url` zurück                                    |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen in URL codiert                                                              |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Manifest/Reference/scope) Manifestmitglied
- [`start_url`](/de/docs/Web/Manifest/Reference/start_url) Manifestmitglied
