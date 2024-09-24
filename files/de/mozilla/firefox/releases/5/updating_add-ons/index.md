---
title: Aktualisierung von Add-ons für Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 5 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 5 finden Sie unter [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfungs-Tool überprüft. Add-ons, die keine APIs verwenden, die sich in Firefox 5 geändert haben, und die keine Binärkomponenten enthalten (die für jede wichtige Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzugeben, dass sie in Firefox 5 funktionieren.

Daher sollten Sie zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt überarbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 5 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Grenzfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie bitte zu dieser Seite zurück und lesen Sie weiter.

## Änderungen am Benutzerinterface

Aufgrund des kurzen Entwicklungszyklus (selbst für unseren schnellen Veröffentlichungszyklus; Firefox 5 hatte aus zeitlichen Gründen einen extra kurzen Zeitplan) gibt es sehr wenige UI-bezogene Änderungen in Firefox 5.

### Bestimmung der UI-Sprache

In der Vergangenheit spiegelte die DOM-Eigenschaft {{ domxref("Navigator.language", "window.navigator.language") }} die Sprache der Benutzeroberfläche von Firefox wider. Dies ist nicht mehr der Fall; stattdessen spiegelt sie den Wert des `Accept-Language` Headers für das aktuelle Dokument wider. Wenn Sie die UI-Sprache ermitteln müssen, sollten Sie stattdessen den Wert der `general.useragent.locale`-Einstellung betrachten.

## DOM-Änderungen

Das Verhalten von {{ domxref("setTimeout()") }} und {{ domxref("setInterval()") }} hat sich geändert; die erlaubte Mindestzeit hat sich geändert und [variiert je nach Situation](/de/docs/Web/API/setTimeout#minimum_delay_and_timeout_nesting). Darüber hinaus werden Zeitüberschreitungen und Intervalle auf eins pro Sekunde in inaktiven Tabs begrenzt (das heißt, Tabs, die der Benutzer derzeit nicht betrachtet).

## JavaScript-Änderungen

Die folgenden Keywords sind jetzt in JavaScript reserviert, auch wenn Sie sich nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Verwenden Sie diese Schlüsselwörter nirgendwo in Ihrem Code, selbst nicht als Objekt-Eigenschaftsnamen.

> [!NOTE]
> Dies ist eines der Dinge, die das automatische Upgrade-Tool von AMO möglicherweise nicht immer erfasst, daher überprüfen Sie Ihren Code darauf, wenn Ihr Add-on automatisch aktualisiert wurde, aber immer noch nicht richtig funktioniert.

## Schnittstellenänderungen

Das Instanziieren bestimmter Dienste, einschließlich des `nsICertOverrideService`, beim Start kann Firefox unbrauchbar machen ([Firefox Bug 650858](https://bugzil.la/650858)). Dies passiert nur, wenn Sie versuchen, einen Dienst zu instanziieren, bevor das `load` Ereignis ausgelöst wird.

Um dies zu beheben, verschieben Sie Ihre Instanziierung dieser Dienste in Ihren `load`-Event-Handler:

```js
var MyObject = {
  comp: null,
  init() {
    this.comp = Components.classes["…"].getService(/* … */);
  },
  // …
};
window.addEventListener(
  "load",
  function () {
    MyObject.init();
  },
  false,
);
```

Eine noch bessere Lösung ist natürlich, den Best Practices zur Leistung zu folgen und Dienste erst dann zu instanziieren, wenn Sie sie tatsächlich verwenden müssen.

## Siehe auch

- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
