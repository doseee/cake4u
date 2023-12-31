package com.a604.cake4u.sheettaste.dto;

import com.a604.cake4u.sheettaste.entity.SheetTaste;
import lombok.*;

@Getter
@Setter
public class SheetTasteResponseDto {
    private Long id;
    private Long sellerId;
    private boolean vanilla;
    private boolean chocolate;
    private boolean earl_gray;
    private boolean red_velvet;
    private boolean matcha;
    private boolean mocha;
    private boolean cheese;
    private boolean carrot;
    private boolean sweet_potato;

    public SheetTasteResponseDto(SheetTaste entity) {
        this.id = entity.getId();
        this.sellerId = entity.getSellerId();
        this.vanilla = entity.isVanilla();
        this.chocolate = entity.isChocolate();
        this.earl_gray = entity.isEarlGray();
        this.red_velvet = entity.isRedVelvet();
        this.matcha = entity.isMatcha();
        this.mocha = entity.isMocha();
        this.cheese = entity.isCheese();
        this.carrot = entity.isCarrot();
        this.sweet_potato = entity.isSweetPotato();
    }
}
