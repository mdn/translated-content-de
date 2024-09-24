---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen zu spezifizieren, die beschreiben, wie Netzwerk-Anfragen gehandhabt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerk-Anfragen zu evaluieren und zu modifizieren, ohne die Erweiterungen über individuelle Netzwerk-Anfragen zu benachrichtigen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Die Berechtigung `"declarativeNetRequest"` erlaubt es Erweiterungen, Anfragen ohne Host-Berechtigungen zu blockieren und zu aktualisieren. Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder Header von Anfragen modifizieren möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der Berechtigung `"declarativeNetRequest"` verwendet wird. Um auf Anfragen in diesen Fällen zu reagieren, sind Host-Berechtigungen für die URL der Anfrage erforderlich. Für alle Anfragen, außer Navigationsanfragen (d.h., Ressourcentyp `main_frame` und `sub_frame`), sind auch Host-Berechtigungen für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist in der Regel das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können von Erweiterungen nicht abgeglichen werden. Dazu gehören privilegierte Browser-Anfragen, Anfragen zu oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da diese Informationen zu abgeglichenen deklarativen Regeln zurückgeben. Weitere Informationen finden Sie unter [Testen](#testen).

## Regeln

Die deklarativen Regeln werden durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Erforderlich und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn angegeben, sollte sie >= 1 sein. Standardwert ist 1. Siehe [Abgleichspräzedenzfälle](#abgleichspräzedenzfälle) für Details, wie die Priorität beeinflusst, welche Regeln angewendet werden.
- `condition` – Die Bedingung {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die Aktion {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die durchgeführt werden soll, wenn die Regel abgeglichen wird. Regeln können folgende Aktionen ausführen:
  - eine Netzwerk-Anfrage blockieren.
  - eine Netzwerk-Anfrage umleiten.
  - Header von einer Netzwerk-Anfrage modifizieren.
  - verhindern, dass eine andere abpassende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht verändert.
> - die Umleitungs-URL ungültig ist (z.B. ist der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL).

Dies ist eine Beispielregel, die alle Skriptanfragen blockiert, die von `"foo.com"` zu einer beliebigen URL stammen, die `"abc"` als Teilstring enthält:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster zu spezifizieren, das gegen die Anfrage-URL abgeglichen wird. Weitere Details finden Sie unter {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}}. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Passt zu</th>
<th>Passt nicht zu</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## Regelsets

Regeln sind in Regelsets organisiert:

- **statische Regelsets**: Sammlungen von Regeln, definiert mit dem [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel und im Add-on gespeichert. Ein Add-on kann statische Regelsets ein- und ausschalten mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}}. Die Menge der aktivierten statischen Regelsets wird über Sitzungen hinweg beibehalten, aber nicht über Erweiterungsaktualisierungen hinweg. Die aktivierten statischen Regelsets bei der Installation und Aktualisierung einer Erweiterung werden durch den Inhalt des `"declarative_net_request"` Manifest-Schlüssels bestimmt.
- **dynamisches Regelset**: Regeln, die hinzugefügt oder entfernt werden mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}}. Diese Regeln bleiben über Sitzungen und Erweiterungsaktualisierungen hinweg erhalten.
- **Sitzungsregelset**: Regeln, die hinzugefügt oder entfernt werden mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}}. Diese Regeln werden über Browsersitzungen hinweg nicht erhalten.

> [!NOTE]
> Fehler und Warnungen über ungültige statische Regeln werden nur während des [Testens](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, dass Sie die Gültigkeit Ihrer statischen Regelsets durch Testen überprüfen.

## Limits

### Limits für statische Regelsets

Eine Erweiterung kann:

- statische Regelsets im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- statische Regelsets aktivieren (im `"declarative_net_request"` Manifest-Schlüssel oder programmatisch), so dass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreiten und die Anzahl der aktivierten statischen Regelsets nicht den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} überschreiten.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsets für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten sich nicht auf einen bestimmten Wert des globalen Limits verlassen, sondern {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl zusätzlicher Regeln zu finden, die sie aktivieren können.
- Regeln in statischen Regelsets bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsbezogene Regeln

Die Anzahl der dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann, ist beschränkt auf:

- In Safari und bis zu Chrome 119 und Firefox 127, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Abgleichspräzedenzfälle

Wenn der Browser evaluiert, wie Anfragen behandelt werden sollen, überprüft er die Regeln jeder Erweiterung, die eine Bedingung enthält, die auf die Anfrage zutrifft, und wählt jene, die in Erwägung gezogen wird, wie folgt aus:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig auf 1 gesetzt werden, wenn die Priorität nicht festgelegt ist).<br>
   Falls dies nicht zu einer anzuwendenden Regel führt:
2. die Regelaktion, in folgender Präzedenzreihenfolge:
   1. "allow" bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für die Ressourcentypen `main_frame` und `sub_frame`) hat denselben Effekt wie "allow", gilt jedoch auch für zukünftige Subressourcenladevorgänge im Dokument (einschließlich untergeordneter Frames), die aus der Anfrage generiert werden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" schreibt Anforderungs- oder Antwortheader oder beides um.

> [!NOTE]
> Wenn mehrere abpassende Regeln dieselbe Regelpriorität und denselben Regelaktionstyp haben, kann das Ergebnis mehrdeutig sein, wenn die abgepasste Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften, daher gibt es keine Mehrdeutigkeit: Alle abpassenden "block"-Aktionen würden zu demselben Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird alle bis auf eine "redirect"-Aktion ignoriert. Es ist weiterhin möglich, wiederholt umzuleiten, wenn die umgeleitete Anfrage eine andere Regelbedingung erfüllt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig angewendet werden, wenn sie verschiedene Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie denselben Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Bewertungsreihenfolge der "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge zu kontrollieren, in der Aktionen angewendet werden, weisen Sie Regeln, deren Reihenfolge wichtig ist, unterschiedliche `priority`-Werte zu.

> [!NOTE]
> Nach der Regelpriorität und der Regelaktion berücksichtigt Firefox das Regelset, zu dem die Regel gehört, in dieser Präzedenzreihenfolge: Sitzung > dynamisch > Sitzungsregelsets.
> Dies kann nicht browserübergreifend vorausgesetzt werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine abpassende Regel hat, wählt der Browser diejenige aus, die in dieser Präzedenzreihenfolge angewendet wird:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die abpassenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelsets zu helfen. Diese APIs erfordern die Berechtigung `"declarativeNetRequestFeedback"`. Außerdem:

- In Chrome sind diese APIs nur für nicht gepackte Erweiterungen verfügbar.
- In Firefox sind diese APIs nur verfügbar, nachdem die Präferenz `extensions.dnr.feedback` auf `true` gesetzt wurde. Setzen Sie diese Präferenz mittels `about:config` oder dem [`--pref`-Flag des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest-API

- Die declarativeNetRequest-API evaluiert Netzwerk-Anfragen direkt im Browser. Das macht sie leistungsstärker als die webRequest-API, bei der jede Netzwerk-Anfrage in JavaScript im Erweiterungsprozess ausgewertet wird.
- Da die Anfragen nicht vom Erweiterungsprozess abgefangen werden, beseitigt die declarativeNetRequest die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben.
- Im Gegensatz zur webRequest-API erfordert das Blockieren oder Aktualisieren von Anfragen mit der declarativeNetRequest-API keine Host-Berechtigungen, wenn sie mit der Berechtigung `declarativeNetRequest` verwendet wird.
- Die declarativeNetRequest-API bietet den Benutzern eine bessere Privatsphäre, da Erweiterungen die im Namen des Benutzers gestellten Netzwerk-Anfragen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest-API werden Bilder oder IFRAMES, die mit der declarativeNetRequest-API blockiert werden, automatisch im DOM zusammengeklappt.
- Beim Entscheiden, ob eine Anfrage blockiert oder umgeleitet wird, hat die declarativeNetRequest-API Vorrang vor der webRequest-API, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso werden alle Header, die durch die declarativeNetRequest-API entfernt werden, nicht für Webanfrage-Erweiterungen sichtbar gemacht.
- Die webRequest-API ist flexibler als die declarativeNetRequest-API, da sie es Erweiterungen erlaubt, eine Anfrage programmatisch zu evaluieren.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details zu einer abgepassten Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anforderungs- oder Antwortheader, die für die Anfrage modifiziert werden sollen.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details zu einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Aktion definiert, die ausgeführt werden muss, wenn eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das Details zu einer URL-Transformation enthält, die für eine Umleitungsaktion durchgeführt werden soll.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : ID des Regelsets für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}}-Aufrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl von statischen Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsets garantiert wird.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl von statischen Regeln, die in jedem statischen Regelset deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl von dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl von statischen Regelsets, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl von regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl von sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl von statischen Regelsets, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssels angeben kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelset-ID für die von der Erweiterung hinzugefügten sitzungsbezogenen Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht ist.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der in einem statischen Regelset deaktivierten Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsets zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle für die Erweiterung abgeglichenen Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsbezogenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Prüft, ob ein regulärer Ausdruck als {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Prüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung mit einer hypothetischen Anfrage übereinstimmen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge der dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsets für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge der sitzungsbezogenen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Zustand von Regeln in einem statischen Regelset.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, wenn eine Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" debuggt wird.

{{WebExtExamples("h2")}}

## Browserkompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
