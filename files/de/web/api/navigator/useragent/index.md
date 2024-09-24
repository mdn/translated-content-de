---
title: "Navigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/Navigator/userAgent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`Navigator.userAgent`** gibt den User-Agent-String für den aktuellen Browser zurück.

> [!NOTE]
> Die Spezifikation verlangt von den Browsern, so wenig Informationen wie möglich über dieses Feld bereitzustellen. Gehen Sie niemals davon aus, dass der Wert dieser Eigenschaft in zukünftigen Versionen desselben Browsers gleich bleibt. Versuchen Sie, sie überhaupt nicht zu verwenden oder nur für aktuelle und vergangene Versionen eines Browsers. Neue Browser könnten beginnen, denselben UA oder Teile davon wie ein älterer Browser zu verwenden: Es gibt wirklich keine Garantie dafür, dass der Browser-Agent tatsächlich derjenige ist, der von dieser Eigenschaft angegeben wird.
>
> Bedenken Sie auch, dass Benutzer eines Browsers den Wert dieses Feldes nach Belieben ändern können (UA-Spoofing).

Die Erkennung des Browsers basierend auf dem User-Agent-String ist **unzuverlässig** und **wird nicht empfohlen**, da der User-Agent-String von Benutzern konfigurierbar ist. Zum Beispiel:

- In Firefox können Sie die Einstellung `general.useragent.override` in `about:config` ändern. Einige Firefox-Erweiterungen tun dies; jedoch ändert dies nur den gesendeten HTTP-Header und das, was von `navigator.userAgent` zurückgegeben wird. Es könnte andere Methoden geben, die JavaScript-Code verwenden, um den Browser zu identifizieren.
- Opera 6+ ermöglicht es Benutzern, den Browser-Identifikationsstring über ein Menü festzulegen.

## Wert

Ein String, der den vollständigen User-Agent-String angibt, den der Browser sowohl in {{Glossary("HTTP")}}-Headern als auch als Antwort auf diese und andere verwandte Methoden des {{domxref("Navigator")}}-Objekts bereitstellt.

Der User-Agent-String basiert auf einer formalen Struktur, die in mehrere Informationsstücke zerlegt werden kann. Jedes dieser Informationsstücke stammt aus anderen Navigator-Eigenschaften, die ebenfalls vom Benutzer festgelegt werden können. Weitere Informationen über die Form des User-Agent-Strings finden Sie im {{HTTPHeader("User-agent")}} HTTP-Header.

## Beispiele

```js
alert(window.navigator.userAgent);
// zeigt "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0" an
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("User-Agent")}} HTTP-Header
